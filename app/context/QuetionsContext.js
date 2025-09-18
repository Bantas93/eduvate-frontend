"use client";

import Swal from "sweetalert2";

const { createContext, useContext, useState } = require("react");

const QuetionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
  const [answerType, setAnswerType] = useState("PG");
  const [question, setQuestion] = useState("");
  const [exams, setExams] = useState([{ examId: "" }]);
  const [tag, setTag] = useState("");
  const [answerOption, setAnswerOption] = useState([
    { option: "", isCorrect: false, label: "A" },
  ]);
  const examName = [
    {
      examId: "1111",
      examName: "Umum",
    },
    {
      examId: "2222",
      examName: "Biologi",
    },
    {
      examId: "3333",
      examName: "Ipa",
    },
  ];

  const handleAddExam = () => {
    setExams([...exams, { examId: "" }]);
  };

  const handleAddOption = () => {
    if (answerOption.length >= 5) {
      Swal.fire("Over !", "Opsi pilihan ganda sudah maksimal", "warning");
      return;
    }
    setAnswerOption([
      ...answerOption,
      { option: "", isCorrect: false, label: "" },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const filteredAnswerOptions = answerOption.filter(
      (item) => item.option.trim() !== ""
    );

    // const filteredExams = exams.filter((item) => item.examId.trim() !== "");

    const payload = [
      {
        question,
        answerType,
        answerOption: filteredAnswerOptions,
        exams: exams,
      },
    ];

    console.log(payload);
    Swal.fire("Sukses !", "Tambah soal telah berhasil !", "success");
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
    <QuetionsContext.Provider
      value={{
        answerType,
        setAnswerType,
        question,
        setQuestion,
        exams,
        setExams,
        answerOption,
        setAnswerOption,
        handleAddExam,
        handleAddOption,
        handleSubmit,
        examName,
        tag,
        setTag,
      }}
    >
      {children}
    </QuetionsContext.Provider>
  );
};

export const useQuestions = () => useContext(QuetionsContext);
