import { NextResponse } from "next/server";

const protectedRoutes = [
  "/dashboard",
  "/ujian-materi",
  "/profile",
  // tambahkan route-private lain di sini
];

function isProtectedPath(pathname) {
  return protectedRoutes.some(
    (r) => pathname === r || pathname.startsWith(r + "/")
  );
}

export function middleware(req) {
  const token = req.cookies.get("accessToken")?.value;
  const { pathname } = req.nextUrl;

  // 1) Kalau token TIDAK ADA dan mengakses route private -> redirect ke halaman login "/"
  if (!token && isProtectedPath(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // 2) Kalau token ADA dan mencoba mengakses root "/" -> jangan biarkan
  if (token && pathname === "/") {
    // Usahakan kembalikan ke halaman asal (referer) agar user "tetap di URL saat ini"
    const referer = req.headers.get("referer");
    if (referer) {
      try {
        const refUrl = new URL(referer);
        // Pastikan referer bukan root (supaya tidak loop) dan return same-origin path
        if (refUrl.pathname && refUrl.pathname !== "/") {
          // Jika referer berasal dari host yang sama, redirect ke sana
          if (refUrl.origin === new URL(req.url).origin) {
            return NextResponse.redirect(refUrl);
          }
        }
      } catch (e) {
        // invalid referer -> ignore dan fallback ke dashboard
      }
    }

    // fallback: redirect ke dashboard
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Default: lanjutkan request
  return NextResponse.next();
}

/**
 * Pastikan middleware hanya berjalan pada route yang relevan.
 * Tambahkan semua route yang perlu dicek (root + semua private route pattern).
 */
export const config = {
  matcher: [
    "/", // root
    "/dashboard/:path*",
    "/ujian-materi/:path*",
    "/profile/:path*",
    // tambahkan pattern lain bila perlu
  ],
};
