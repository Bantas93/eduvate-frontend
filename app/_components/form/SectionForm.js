"use client";
import MultipleForm from "./MultipleForm";
import { useQuestions } from "@/app/context/QuetionsContext";

export default function SectionForm() {
  const {
    answerType,
    setAnswerType,
    question,
    setQuestion,
    exams,
    setExams,
    handleAddExam,
  } = useQuestions();
  return (
    <div className="flex flex-col h-full gap-3 text-sm">
      <div>
        <div>Pertanyaan :</div>
        <textarea
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="border border-gray-400 p-1 w-full h-[100px]"
          required
        />
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

        <div className="min-w-full min-h-[100px] w-fit h-fit border">
          {answerType === "PG" ? (
            <MultipleForm />
          ) : answerType === "ES" ? (
            <div>Content Pilihan essay</div>
          ) : (
            <div>Content Pilihan checklist</div>
          )}
        </div>
      </div>
      <div className="grid grid-row gap-2 w-full">
        <div className="flex flex-row gap-2 items-center">
          <div>Tag Ujian Materi</div>
          <div className="flex flex-row gap-4 py-1">
            <button className="border rounded-lg px-2 hover:cursor-pointer hover:bg-gray-300 transition-all">
              Biologi
            </button>
            <button className="border rounded-lg px-2 hover:cursor-pointer hover:bg-gray-300 transition-all">
              Umum
            </button>
            <button className="border rounded-lg px-2 hover:cursor-pointer hover:bg-gray-300 transition-all">
              IPA
            </button>
          </div>
        </div>

        <div className="">
          <h3 className="font-bold">Tag materi</h3>
          {exams.map((exam, idx) => (
            <div key={idx} className="mb-2">
              <input
                type="text"
                placeholder="Isi tag"
                value={exam.examId}
                onChange={(e) =>
                  setExams(
                    exams.map((x, i) =>
                      i === idx ? { examId: e.target.value } : x
                    )
                  )
                }
                className="border p-2 w-full"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddExam}
            className="px-2 py-1 border rounded"
          >
            Tambah
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
