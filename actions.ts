"use server";

import { typeToFlattenedError, z } from "zod";

const USERNAME_MIN_LENGTH = 5;
const PASSWORD_MIN_LENGTH = 10;
const PASSWORD_REGEX = /^(?=.*\d).{10,}$/;

const checkEmail = (email: string) => email.includes("@zod.com");

const formSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .trim()
    .email()
    .refine(checkEmail, "Only @zod.com emails are allowed"),
  username: z
    .string({
      invalid_type_error: "Username must be a string.",
      required_error: "Username is required.",
    })
    .trim()
    .min(
      USERNAME_MIN_LENGTH,
      `Username should be at least ${USERNAME_MIN_LENGTH} characters long.`
    ),
  password: z
    .string()
    .trim()
    .min(
      PASSWORD_MIN_LENGTH,
      `Password should be at least ${PASSWORD_MIN_LENGTH} characters long.`
    )
    .regex(
      PASSWORD_REGEX,
      "Password should contain at least one number (0-9)."
    ),
});

interface FormState {
  isSuccess: boolean;
  error: typeToFlattenedError<
    { email: string; username: string; password: string },
    string
  > | null;
}

export async function createAccount(
  _: unknown,
  formData: FormData
): Promise<FormState> {
  const data = {
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
  };
  const result = formSchema.safeParse(data);
  if (result.success) {
    return {
      error: null,
      isSuccess: true,
    };
  }
  return {
    error: result.error?.flatten(),
    isSuccess: false,
  };
}
