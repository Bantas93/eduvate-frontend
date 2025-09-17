"use server";
import { NextResponse } from "next/server";
import { getSecondLocal } from "./app/lib/helpers";

const protectedRoutes = ["/dashboard", "/exam"];

function isProtectedPath(pathname) {
  return protectedRoutes.some(
    (r) => pathname === r || pathname.startsWith(r + "/")
  );
}

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  const token = req.cookies.get("accessToken")?.value;
  const refreshToken = req.cookies.get("refreshToken")?.value;
  if (!token && isProtectedPath(pathname)) {
    if (refreshToken) {
      try {
        const refreshRes = await fetch(
          `http://localhost:8080/api/v1/auth/refresh-token`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${refreshToken}`,
            },
          }
        );
        if (refreshRes.ok) {
          const data = await refreshRes.json();
          // buat response baru
          const res = NextResponse.next();
          let expiresAt;
          expiresAt = await getSecondLocal(data.expiresAt);
          // set cookie accessToken
          res.cookies.set("accessToken", data.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: expiresAt,
          });

          // set refreshToken baru kalau dikirim
          if (data.refreshToken) {
            expiresAt = await getSecondLocal(data.expiresAt);

            res.cookies.set("refreshToken", data.refreshToken, {
              httpOnly: true,
              secure: process.env.NODE_ENV === "production",
              sameSite: "strict",
              path: "/",
              maxAge: 60 * 60 * 24 * 7,
            });
          }

          return res;
        }
      } catch (err) {
        console.error("Error refresh token:", err);
        // kalau error refresh, terus redirect ke login
      }
    }

    return NextResponse.redirect(new URL("/", req.url));
  }

  if (token && pathname === "/") {
    const referer = req.headers.get("referer");
    if (referer) {
      try {
        const refUrl = new URL(referer);
        if (
          refUrl.pathname &&
          refUrl.pathname !== "/" &&
          refUrl.origin === new URL(req.url).origin
        ) {
          return NextResponse.redirect(refUrl);
        }
      } catch (e) {
        // ignore jika referer tidak valid
      }
    }
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/exam/:path*"],
};
