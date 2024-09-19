import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getSession = () => {
  const cookie = cookies().get("session")?.value;
  console.log("cookie: " + cookie);
  if (cookie) {
    return { isAuth: true, userId: "userid..." };
  }
  return null;
};
