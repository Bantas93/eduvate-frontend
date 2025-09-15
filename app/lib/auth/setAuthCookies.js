"use server"; // supaya pasti jalan di server

import { cookies } from "next/headers";

export async function setAuthCookies(data) {
  // set access token
  cookies().set("accessToken", data.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 15, // 15 menit
    path: "/",
  });

  // set refresh token
  cookies().set("refreshToken", data.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7, // 7 hari
    path: "/",
  });
}
