"use client";

import CheckListForm from "./CheckListForm";
import EssayForm from "./EssayForm";
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
    examName,
    tag,
    setTag,
  } = useQuestions();

  const handleTag = (e) => {
    const { examId, examName } = e;

    if (tag === examName) {
      setTag("");
      setExams("");
    } else {
      setTag(examName);
      setExams(examId);
    }
  };

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
            className={`pb-1 px-2 hover:cursor-pointer hover:bg-gray-300
              ${answerType === "PG" ? "border-b-4 border-blue-500" : ""}
              `}
            onClick={() => setAnswerType("PG")}
          >
            Pilihan ganda
          </button>
          <button
            className={`pb-1 px-2 hover:cursor-pointer hover:bg-gray-300
              ${answerType === "ES" ? "border-b-4 border-blue-500" : ""}
              `}
            onClick={() => setAnswerType("ES")}
          >
            Essay
          </button>
          <button
            className={`pb-1 px-2 hover:cursor-pointer hover:bg-gray-300
              ${answerType === "CL" ? "border-b-4 border-blue-500" : ""}
              `}
            onClick={() => setAnswerType("CL")}
          >
            Check list
          </button>
        </div>

        <div className="min-w-full min-h-[100px] w-fit h-fit border">
          {answerType === "PG" ? (
            <MultipleForm />
          ) : answerType === "ES" ? (
            <EssayForm />
          ) : (
            <CheckListForm />
          )}
        </div>
      </div>
      <div className="grid grid-row gap-2 w-full">
        <div className="flex flex-row gap-2 items-center">
          <div>Tag Ujian Materi</div>
          <div className="flex flex-row gap-4 py-1">
            {examName.map((ex) => {
              return (
                <button
                  key={ex.examId}
                  className={`border rounded-lg px-2 hover:cursor-pointer hover:bg-blue-400
                   ${
                     tag === ex.examName
                       ? "bg-blue-400 text-white font-bold"
                       : ""
                   }
                    `}
                  value={tag}
                  onClick={() => handleTag(ex)}
                >
                  {ex.examName}
                </button>
              );
            })}
          </div>
        </div>

        {/* <div className="">
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
        </div> */}
      </div>
      <div className="">
        <button className="bg-blue-500 text-white rounded px-4 py-2 hover:cursor-pointer hover:bg-blue-600">
          SOAL SELANJUTNYA
        </button>
      </div>
    </div>
  );
}
