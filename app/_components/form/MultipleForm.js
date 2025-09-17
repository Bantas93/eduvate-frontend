"use client";

import { useQuestions } from "@/app/context/QuetionsContext";

export default function MultipleForm() {
  const { answerOption, setAnswerOption, handleAddOption, handleSubmit } =
    useQuestions();

  return (
    <div className="flex flex-col gap-4 px-4 py-2 ">
      <div>
        <h3 className="font-bold">Opsi Jawaban</h3>
        {answerOption.map((opt, idx) => (
          <div key={idx} className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Isi jawaban"
              value={opt.option}
              onChange={(e) =>
                setAnswerOption(
                  answerOption.map((o, i) =>
                    i === idx ? { ...o, option: e.target.value } : o
                  )
                )
              }
              className="border p-2 flex-1"
            />
            <input
              type="text"
              placeholder="Label"
              value={opt.label}
              onChange={(e) =>
                setAnswerOption(
                  answerOption.map((o, i) =>
                    i === idx ? { ...o, label: e.target.value } : o
                  )
                )
              }
              className="border p-2 w-16"
            />
            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={opt.isCorrect}
                onChange={(e) =>
                  setAnswerOption(
                    answerOption.map((o, i) =>
                      i === idx ? { ...o, isCorrect: e.target.checked } : o
                    )
                  )
                }
              />
              Benar
            </label>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddOption}
          className="px-2 py-1 border rounded"
        >
          Tambah Opsi
        </button>
      </div>
    </div>
  );
}
