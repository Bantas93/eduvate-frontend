"use client";

import { useQuestions } from "@/app/context/QuetionsContext";
import AutoTextarea from "../AutoTextArea";
import Dropdown from "../DropDown";
import { useEffect } from "react";

export default function MultipleForm() {
  const { answerOption, setAnswerOption, handleAddOption, setExams, setTag } =
    useQuestions();

  useEffect(() => {
    setAnswerOption([{ option: "", isCorrect: false, label: "" }]);
    setExams([{ examId: "" }]);
    setTag("");
  }, []);

  return (
    <div className="flex flex-col px-4 py-2">
      <div className="flex justify-between my-1">
        <h3 className="font-bold">Opsi Jawaban</h3>
        <h3 className="font-bold">Benar</h3>
      </div>

      {answerOption.map((opt, idx) => (
        <div key={idx} className="flex gap-2 mb-2">
          <AutoTextarea
            placeholder="Isi jawaban"
            value={opt.option}
            onChange={(e) =>
              setAnswerOption(
                answerOption.map((o, i) =>
                  i === idx ? { ...o, option: e.target.value } : o
                )
              )
            }
          />

          <Dropdown
            value={opt.label}
            className="border rounded-lg px-2 text-[#3B82F6] hover:cursor-pointer"
            onChange={(e) =>
              setAnswerOption(
                answerOption.map((o, i) =>
                  i === idx ? { ...o, label: e.target.value } : o
                )
              )
            }
          />

          <label className="flex items-center gap-1 mx-3">
            <input
              type="checkbox"
              checked={opt.isCorrect}
              className="text-white border"
              onChange={(e) =>
                setAnswerOption(
                  answerOption.map((o, i) =>
                    i === idx ? { ...o, isCorrect: e.target.checked } : o
                  )
                )
              }
            />
          </label>
        </div>
      ))}

      <div>
        <button
          type="button"
          onClick={handleAddOption}
          className="px-2 py-1 border rounded text-[#3B82F6] hover:cursor-pointer hover:bg-[#3B82F6] hover:text-white"
        >
          Tambah Opsi
        </button>
      </div>
    </div>
  );
}
