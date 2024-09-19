import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/"];
const publicRoutes = ["/signin"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const cookie = cookies().get("session")?.value;
  console.log(cookie);
  if (isProtectedRoute && !cookie) {
    return NextResponse.redirect(new URL("/singin", req.nextUrl));
  }
  return NextResponse.next();
}
