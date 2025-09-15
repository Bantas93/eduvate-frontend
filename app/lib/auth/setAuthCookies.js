"use server"; // supaya pasti jalan di server

import { cookies } from "next/headers";

export async function setAuthCookies(data) {
  const cookieStore = await cookies();
  // set access token
  cookieStore.set("accessToken", data.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 15, // 15 menit
    path: "/",
  });

  // set refresh token
  cookieStore.set("refreshToken", data.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7, // 7 hari
    path: "/",
  });
}
