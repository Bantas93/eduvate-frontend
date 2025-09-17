"use client";
import { useState } from "react";
import MultipleForm from "./MultipleForm";

export default function SectionForm() {
  const [answerType, setAnswerType] = useState("PG");
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
            onClick={() => setAnswerType("PG")}
          >
            Pilihan ganda
          </button>
          <button
            className="border rounded-lg px-2 hover:cursor-pointer hover:bg-gray-300 transition-all"
            onClick={() => setAnswerType("ES")}
          >
            Essay
          </button>
          <button
            className="border rounded-lg px-2 hover:cursor-pointer hover:bg-gray-300 transition-all"
            onClick={() => setAnswerType("CL")}
          >
            Check list
          </button>
        </div>

        <div className="min-w-full min-h-[100px] w-fit h-fit border p-1">
          {answerType === "PG" ? (
            <MultipleForm
              answerType={answerType}
              setAnswerType={setAnswerType}
            />
          ) : answerType === "ES" ? (
            <div>Content Pilihan essay</div>
          ) : (
            <div>Content Pilihan checklist</div>
          )}
        </div>
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
