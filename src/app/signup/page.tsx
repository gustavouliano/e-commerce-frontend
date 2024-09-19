"use client";
import { signin } from "@/actions/auth";
import { redirect } from "next/navigation";
import { useFormState } from "react-dom";
import signupAction from "./signupAction";

export default function SignUp() {
  const [state, formAction] = useFormState(signupAction, undefined);

  const handleForm = async (formData: FormData) => {
    // await signin(formData);
    // redirect("/");
  };

  return (
    <div>
      <form action={formAction}>
        E-mail: <input name="email" type="email" placeholder="email" />
        <br />
        Password: <input name="password" type="password" />
        <br />
        <button type="submit">Sign up</button>
      </form>
      {state && <p>{state}</p>}
    </div>
  );
}
