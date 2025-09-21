"use client";
import { useQuestions } from "@/app/context/QuetionsContext";

export default function SectionDraft() {
  const { handleSubmit } = useQuestions();
  return (
    <div className="grid grid-row gap-2 text-sm">
      <div className="">Draft soal</div>

      <div className="flex flex-col gap-2 h-full">
        <div className="border border-[#F59E0B] rounded-xl mx-2 px-1">
          <div className="flex flex-col gap-1 p-2">
            <p> adksjfknvkvndkfnvkdn</p>
            <div className="border-b-2 mx-1 "></div>
            <div>Pilihan ganda</div>
            <div className="flex flex-row gap-2">
              <button className="border bg-[#10B981] text-white rounded-lg px-2 py-0.5">
                biologi
              </button>
              <button className="border bg-[#10B981] text-white rounded-lg px-2 py-0.5">
                ipa
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <button
            className="bg-blue-500 text-white rounded px-6 py-2 hover:cursor-pointer hover:bg-blue-600"
            onClick={handleSubmit}
          >
            Simpan Pertanyaan
          </button>
        </div>
      </div>
    </div>
  );
}
