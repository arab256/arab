import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { auth } from "./auth";
import { Role } from "@prisma/client";

const protectedRoutes = ["/dashboard"];

export default async function middleware(request: NextRequest) {
  const session = await auth();

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );

  const isAdminRoute = request.nextUrl.pathname.startsWith("/dashboard");

  const isAdmin = session?.user.role === Role.Admin

  if (!session && isProtected) {
    const signInUrl = new URL("/auth/sign-in", request.nextUrl);
    signInUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);

    if (request.nextUrl.pathname !== "/auth/sign-in") {
      return NextResponse.redirect(signInUrl);
    }
  }

  if (isAdminRoute && !isAdmin) {
    const homeUrl = new URL("/", request.nextUrl);

    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
