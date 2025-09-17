"use client";

import { useState } from "react";

export default function MultipleForm({ answerType }) {
  const [question, setQuestion] = useState("");
  const [answerOption, setAnswerOption] = useState([
    { option: "", isCorrect: false, label: "" },
  ]);
  const [exams, setExams] = useState([{ examId: "" }]);

  const handleAddOption = () => {
    setAnswerOption([
      ...answerOption,
      { option: "", isCorrect: false, label: "" },
    ]);
  };

  const handleAddExam = () => {
    setExams([...exams, { examId: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = [
      {
        question,
        answerType,
        answerOption,
        exams,
      },
    ];
    console.log(payload);
    // const res = await fetch("/api/v1/questions", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Tenant-Id": "TENANT_ID_KAMU",
    //   },
    //   body: JSON.stringify(payload),
    // });

    // if (res.ok) {
    //   alert("Pertanyaan berhasil disimpan!");
    // } else {
    //   alert("Gagal menyimpan pertanyaan");
    // }
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-4 max-w-xl mx-auto"
      >
        <label>
          Pertanyaan:
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </label>

        <div>
          <h3 className="font-bold">Opsi Jawaban</h3>
          {answerOption.map((opt, idx) => (
            <div key={idx} className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="Isi opsi jawaban"
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
                placeholder="Label (a, b, c...)"
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

        <div>
          <h3 className="font-bold">Exam ID</h3>
          {exams.map((exam, idx) => (
            <div key={idx} className="mb-2">
              <input
                type="text"
                placeholder="Exam ID"
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
            Tambah Exam
          </button>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Simpan Pertanyaan
        </button>
      </form>
    </div>
  );
}
