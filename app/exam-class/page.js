"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const examBank = [
    {
      question: "Ibu kota negara Indonesia adalah?",
      answerType: "PG",
      answerOption: [
        { option: "Jakarta", isCorrect: true, label: "a" },
        { option: "Bandung", isCorrect: false, label: "b" },
        { option: "Surabaya", isCorrect: false, label: "c" },
        { option: "Medan", isCorrect: false, label: "d" },
      ],
      exams: [{ examId: "exam-umum-1" }],
    },
    {
      question: "Siapa proklamator kemerdekaan Indonesia?",
      answerType: "PG",
      answerOption: [
        { option: "Soekarno dan Hatta", isCorrect: true, label: "a" },
        { option: "Soekarno dan Sudirman", isCorrect: false, label: "b" },
        { option: "Hatta dan Sudirman", isCorrect: false, label: "c" },
        { option: "Tan Malaka dan Hatta", isCorrect: false, label: "d" },
      ],
      exams: [{ examId: "exam-umum-1" }],
    },
    {
      question: "Lambang sila pertama Pancasila adalah?",
      answerType: "PG",
      answerOption: [
        { option: "Bintang", isCorrect: true, label: "a" },
        { option: "Rantai", isCorrect: false, label: "b" },
        { option: "Pohon beringin", isCorrect: false, label: "c" },
        { option: "Kepala banteng", isCorrect: false, label: "d" },
      ],
      exams: [{ examId: "exam-umum-1" }],
    },
    {
      question: "Gunung tertinggi di Indonesia adalah?",
      answerType: "PG",
      answerOption: [
        { option: "Puncak Jaya (Cartenz)", isCorrect: true, label: "a" },
        { option: "Gunung Rinjani", isCorrect: false, label: "b" },
        { option: "Gunung Semeru", isCorrect: false, label: "c" },
        { option: "Gunung Kerinci", isCorrect: false, label: "d" },
      ],
      exams: [{ examId: "exam-umum-1" }],
    },
    {
      question: "Bahan baku utama pembuatan kertas adalah?",
      answerType: "PG",
      answerOption: [
        { option: "Kayu", isCorrect: true, label: "a" },
        { option: "Besi", isCorrect: false, label: "b" },
        { option: "Plastik", isCorrect: false, label: "c" },
        { option: "Batu", isCorrect: false, label: "d" },
      ],
      exams: [{ examId: "exam-umum-1" }],
    },
  ];

  const [bankSoal, setBankSoal] = useState("Umum");
  const [generateLink, setGenerateLink] = useState("");
  const [timer, setTimer] = useState(900);
  const [copied, setCopied] = useState(false);
  const handleGenerateLink = () => {
    if (bankSoal != "" && timer != "") {
      setGenerateLink(
        `http://localhost:3000/work-on-questions/${timer}/${bankSoal}`
      );
    }

    return;
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(generateLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };
  return (
    <div className="h-full py-2 flex flex-col gap-2 text-sm">
      <div className="flex gap-2">
        <label className="font-bold px-2">Pilih Bank Soal :</label>
        <select
          value={bankSoal}
          onChange={(e) => setBankSoal(e.target.value)}
          className="px-2 py-1 border rounded hover:cursor-pointer hover:bg-blue-400 hover:text-white"
          // required
        >
          <option value="Umum">Umum</option>
          <option value="Biologi">Biologi</option>
          <option value="Ipa">Ipa</option>
          <option value="Matematika">Matematika</option>
        </select>
      </div>
      <div>
        <label className="font-bold px-2">Set Waktu :</label>
        <select
          value={timer}
          onChange={(e) => setTimer(e.target.value)}
          className="px-2 py-1 border rounded hover:cursor-pointer hover:bg-blue-400 hover:text-white"
          // required
        >
          <option value={900}>15 Menit</option>
          <option value={1800}>30 Menit</option>
          <option value={3600}>1 Jam</option>
          <option value={5400}>1 Jam 30 Menit</option>
          <option value={7200}>2 Jam</option>
          <option value={9000}>2 Jam 30 Menit</option>
          <option value={10800}>3 Jam</option>
        </select>
      </div>
      <div>
        <button
          className="px-2 py-1 border rounded-lg hover:cursor-pointer hover:bg-blue-400 hover:text-white"
          onClick={handleGenerateLink}
        >
          Buat Link
        </button>
      </div>

      {generateLink && (
        <div className="flex gap-2">
          <button className="border rounded px-2 py-1 bg-gray-300">
            {generateLink}
          </button>
          <button
            className="border rounded px-2 py-1 hover:cursor-pointer hover:bg-blue-400 hover:text-white"
            onClick={handleCopy}
          >
            {copied ? "Tersalin!" : "Salin Link"}
          </button>
          <Link
            href={generateLink}
            className="border rounded px-2 py-1 hover:cursor-pointer hover:bg-blue-400 hover:text-white"
          >
            Test Link
          </Link>
        </div>
      )}
    </div>
  );
}
