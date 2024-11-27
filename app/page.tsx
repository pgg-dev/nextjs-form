"use client";

import { createAccount } from "@/actions";
import Button from "@/components/button";
import Input from "@/components/input";
import { useActionState } from "react";

export default function Home() {
  const [state, action] = useActionState(createAccount, null);

  return (
    <main className="flex justify-center pt-60">
      <form action={action} className="flex flex-col gap-4 w-1/3">
        <Input
          name="email"
          type="email"
          placeholder="Email"
          errors={state?.fieldErrors.email}
        />
        <Input
          name="username"
          type="string"
          placeholder="Username"
          errors={state?.fieldErrors.username}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          errors={state?.fieldErrors.password}
        />
        <Button>Log in</Button>
      </form>
    </main>
  );
}
