"use server";

import { cookies } from "next/headers";

export async function setAuthCookies(data) {
  const cookieStore = await cookies();
  // parsing ExpiresAt dari string ke object Date, dan dari date ubah ke  format detik
  cookieStore.set("accessToken", data.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 15,
    path: "/",
  });

  cookieStore.set("refreshToken", data.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
}
