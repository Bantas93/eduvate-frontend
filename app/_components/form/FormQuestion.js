"use client";
import { useState } from "react";

export default function FormQuestion() {
  const [type, setType] = useState("pg");
  return (
    <div className="flex flex-col h-full gap-3 text-sm">
      <div>
        <div>Pertanyaan :</div>
        <textarea className="border h-[100px] w-full px-1" type="text" />
      </div>
      <div className="flex flex-col gap-2">
        <div>Jawaban :</div>
        <div className="flex flex-row gap-4">
          <button
            className="border rounded-lg px-2 hover:cursor-pointer hover:bg-gray-300 transition-all"
            onClick={() => setType("pg")}
          >
            Pilihan ganda
          </button>
          <button
            className="border rounded-lg px-2 hover:cursor-pointer hover:bg-gray-300 transition-all"
            onClick={() => setType("es")}
          >
            Essay
          </button>
          <button
            className="border rounded-lg px-2 hover:cursor-pointer hover:bg-gray-300 transition-all"
            onClick={() => setType("cl")}
          >
            Check list
          </button>
        </div>
        {type === "pg" ? (
          <div className="border h-[100px] p-1">Content Pilihan Ganda</div>
        ) : type === "es" ? (
          <div className="border h-[100px] p-1">Content Pilihan essay</div>
        ) : (
          <div className="border h-[100px] p-1">Content Pilihan checklist</div>
        )}
      </div>
      <div className="flex flex-row gap-4">
        <div>Tag Ujian Materi</div>
        <div className="flex flex-row gap-4">
          <button className="border rounded-lg px-2 hover:cursor-pointer hover:bg-gray-300 transition-all">
            Pilihan ganda
          </button>
          <button className="border rounded-lg px-2 hover:cursor-pointer hover:bg-gray-300 transition-all">
            Essay
          </button>
          <button className="border rounded-lg px-2 hover:cursor-pointer hover:bg-gray-300 transition-all">
            Check list
          </button>
        </div>
      </div>
      <div className="">
        <button className="border rounded-lg px-2 hover:cursor-pointer hover:bg-gray-300 transition-all">
          SOAL SELANJUTNYA
        </button>
      </div>
    </div>
  );
}
