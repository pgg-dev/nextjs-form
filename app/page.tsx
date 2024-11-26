"use client";

import { handleForm } from "@/actions";
import Button from "@/components/button";
import Input from "@/components/Input";
import { useFormState } from "react-dom";

export default function Home() {
  const [state, action] = useFormState(handleForm, null);

  return (
    <main className="flex justify-center pt-60">
      <form action={action} className="flex flex-col gap-4 w-1/3">
        <Input name="email" type="email" placeholder="Email" />
        <Input name="string" type="string" placeholder="Username" />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          error={state?.error}
        />
        <Button>Log in</Button>
      </form>
    </main>
  );
}
