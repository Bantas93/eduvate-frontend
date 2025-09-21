// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// // Dummy soal, biasanya fetch dari database atau API
// const soalList = [
//   {
//     id: 1,
//     pertanyaan: "Ibukota Indonesia adalah?",
//     opsi: ["Jakarta", "Bandung", "Surabaya"],
//   },
//   { id: 2, pertanyaan: "2 + 2 = ?", opsi: ["3", "4", "5"] },
//   {
//     id: 3,
//     pertanyaan: "Gunung tertinggi di dunia adalah?",
//     opsi: ["Kilimanjaro", "Everest", "Elbrus"],
//   },
// ];

// export default function Page() {
//   const params = useParams();
//   const id_user = params.id_user;
//   const [currentSoal, setCurrentSoal] = useState(0);
//   const [jawaban, setJawaban] = useState({});
//   const [timer, setTimer] = useState(3);

//   // Timer untuk setiap soal
//   useEffect(() => {
//     if (currentSoal >= soalList.length) return;

//     // setTimer(10); // reset timer tiap soal
//     const countdown = setInterval(() => {
//       setTimer((prev) => {
//         if (prev === 1) {
//           clearInterval(countdown);
//           handleNext();
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(countdown);
//   }, [currentSoal]);

//   const handleJawab = (idSoal, pilihan) => {
//     setJawaban((prev) => ({
//       ...prev,
//       [idSoal]: pilihan,
//     }));
//   };

//   const handleNext = () => {
//     if (currentSoal < soalList.length - 1) {
//       setCurrentSoal((prev) => prev + 1);
//     } else {
//       // di sini bisa kirim jawaban ke server (id_user + jawaban)
//       console.log("Jawaban user:", id_user, jawaban);
//       alert("Ujian selesai!");
//     }
//   };

//   const handleBack = () => {
//     setCurrentSoal((prev) => prev - 1);
//   };

//   if (currentSoal >= soalList.length) {
//     return <div>Terima kasih, jawaban sudah direkam.</div>;
//   }

//   const soal = soalList[currentSoal];

//   return (
//     <div className="p-4 max-w-md mx-auto border rounded shadow">
//       <h2 className="text-xl font-bold mb-2">Soal {currentSoal + 1}</h2>
//       <p className="mb-4">{soal.pertanyaan}</p>

//       <div className="space-y-2">
//         {soal.opsi.map((o) => (
//           <button
//             key={o}
//             onClick={() => handleJawab(soal.id, o)}
//             className={`block w-full text-left px-4 py-2 rounded border ${
//               jawaban[soal.id] === o ? "bg-blue-500 text-white" : "bg-white"
//             }`}
//           >
//             {o}
//           </button>
//         ))}
//       </div>

//       <div className="flex justify-between items-center mt-4">
//         <span className="text-red-600 font-semibold">Waktu: {timer}s</span>

//         {currentSoal > 0 && (
//           <button
//             onClick={handleBack}
//             className="px-4 py-2 bg-red-500 text-white rounded"
//           >
//             Back
//           </button>
//         )}

//         <button
//           onClick={handleNext}
//           className="px-4 py-2 bg-green-500 text-white rounded"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function Page() {
  const { timer, exam_id } = useParams();
  const [idUser, setIdUser] = useState("");
  const router = useRouter();

  const handleMulai = () => {
    if (idUser.trim() === "") {
      alert("Masukkan ID User!");
      return;
    }
    // redirect ke halaman soal
    router.push(`/work-on-questions/${timer}/${exam_id}/${idUser}`);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="p-6 max-w-md mx-auto border rounded-xl shadow space-y-4">
        <h1 className="text-xl font-bold">Selamat Datang di Ujian</h1>
        <p className="text-gray-600">
          Silakan masukkan ID User Anda untuk memulai ujian.
        </p>

        <input
          type="text"
          placeholder="Masukkan ID User"
          value={idUser}
          onChange={(e) => setIdUser(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />

        <button
          onClick={handleMulai}
          className="px-4 py-2 bg-blue-500 text-white rounded w-full"
        >
          Mulai Ujian
        </button>
      </div>
    </div>
  );
}
