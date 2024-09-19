"use client";
import { signin } from "@/actions/auth";
import { redirect } from "next/navigation";
import { useFormState } from "react-dom";
import signinAction from "./signinAction";

export default function SignIn() {
  const [error, formAction] = useFormState(signinAction, undefined);

  // const handleForm = async (formData: FormData) => {
  //   "use server";
  //   await signin(formData);
  //   redirect("/");
  // };

  return (
    <div>
      <form action={formAction}>
        E-mail: <input name="email" type="email" placeholder="email" />
        <br />
        Password: <input name="password" type="password" />
        <br />
        <button type="submit">Sign in</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
