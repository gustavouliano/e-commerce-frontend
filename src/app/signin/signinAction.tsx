"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function signinAction(
  currentState: any,
  formData: FormData
): Promise<String> {
  const email = formData.get("email");
  const password = formData.get("password");

  const response = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (!data.access_token) {
    return "no token";
  }

  cookies().set("session", data.access_token, {
    secure: true,
    httpOnly: true,
    expires: Date.now() + 24 * 60 * 60 * 1000 * 7, // 7 days
    path: "/",
    sameSite: "strict",
  });
  if (data) {
    redirect("/");
  } else {
    return "error signin action";
  }
}
