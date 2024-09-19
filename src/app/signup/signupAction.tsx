"use server";

import { redirect } from "next/navigation";

export default async function signupAction(
  currentState: any,
  formData: FormData
): Promise<String> {
  // Requisição para criar conta
  const created = true;
  if (created) {
    redirect("/signin");
  } else {
    return "error";
  }
}
