import { cookies } from "next/headers";

export async function signin(formData: FormData) {
  const user = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  console.log(user);
  const expires = new Date(Date.now() + 10 * 1000);
  const session = `${user}-expires`;
  cookies().set("session", session, { expires, httpOnly: true });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return session;
}
