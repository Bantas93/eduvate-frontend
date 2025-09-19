"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="inset-0 z-50 h-screen flex flex-col items-center justify-center bg-opacity-80 pb-50">
      <div className="absolute w-15 h-10 border-4 border-blue-400 border-t-transparent rounded-b-2xl animate-bounce">
        <div className="absolute w-15 h-10 border-4 border-blue-400 border-t-transparent rounded-b-2xl animate-bounce"></div>
      </div>
      <div className="absolute mb-10">
        <div className="flex flex-col gap-2 p-4 animate-bounce">
          <div className="w-8 h-12 border-l-8 border-t-8 border-b-8 border-blue-400 relative">
            <div className="absolute top-1/2 left-0 w-3/4 border-t-8 border-blue-400"></div>
          </div>
        </div>
      </div>

      <div className="w-full font-extrabold tracking-widest text-blue-400 animate-pulse flex items-center justify-center mt-60 ">
        . . . Eduvate Loading . . .
      </div>
      <div className="text-5xl font-extrabold text-red-600 animate-pulse">
        404
      </div>
      <h2 className="text-2xl font-extrabold tracking-widest text-[#3B82F6]">
        Halaman tidak ditemukan
      </h2>
      <button
        className="mt-4 px-2 py-1 font-bold border rounded-lg hover:cursor-pointer hover:text-white hover:bg-[#3B82F6] transition-all"
        onClick={() => router.back()}
      >
        Kembali
      </button>
    </div>
  );
}
