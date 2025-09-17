"use client";
const { createContext, useContext, useState } = require("react");

const QuetionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
  const [answerType, setAnswerType] = useState("PG");
  const [question, setQuestion] = useState("");
  const [exams, setExams] = useState([{ examId: "" }]);
  const [answerOption, setAnswerOption] = useState([
    { option: "", isCorrect: false, label: "" },
  ]);

  const handleAddExam = () => {
    setExams([...exams, { examId: "" }]);
  };

  const handleAddOption = () => {
    setAnswerOption([
      ...answerOption,
      { option: "", isCorrect: false, label: "" },
    ]);
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
      }}
    >
      {children}
    </QuetionsContext.Provider>
  );
};

export const useQuestions = () => useContext(QuetionsContext);
