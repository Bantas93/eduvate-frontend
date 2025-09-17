"use server";

import { cookies } from "next/headers";
import { getSecondLocal } from "../helpers";

export async function setAuthCookies(data) {
  const cookieStore = await cookies();
  const maxAge = await getSecondLocal(data.expiresAt);

  cookieStore.set("accessToken", data.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: maxAge,
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
