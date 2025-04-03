import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const localeCookie = req.cookies.get("locale")?.value;

  if (!localeCookie) {
    const acceptLanguage = req.headers.get("accept-language") || "en-US";
    const userLocale = acceptLanguage.split(",")[0];

    const res = NextResponse.next();
    res.cookies.set("locale", userLocale, {
      httpOnly: false,
      sameSite: "lax",
      path: "/",
    });

    return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
