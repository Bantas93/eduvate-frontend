"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="h-screen w-screen flex flex-col gap-4 justify-center items-center">
      <div className="text-5xl font-extrabold text-red-600">404</div>
      <h2 className="text-2xl font-extrabold tracking-widest text-[#3B82F6]">
        Halaman tidak ditemukan
      </h2>
      <p className="tracking-wide">Harap periksa URL anda..</p>
      <button
        className="px-2 py-1 font-bold border rounded-lg hover:cursor-pointer hover:text-white hover:bg-[#3B82F6] transition-all"
        onClick={() => router.back()}
      >
        Kembali
      </button>
    </div>
  );
}
