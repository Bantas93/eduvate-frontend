// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// // contoh dummy soal per exam_id
// const bankSoal = {
//   math101: [
//     { id: 1, pertanyaan: "2 + 2 = ?", opsi: ["3", "4", "5"] },
//     { id: 2, pertanyaan: "5 x 3 = ?", opsi: ["8", "15", "10"] },
//   ],
//   indonesian: [
//     {
//       id: 1,
//       pertanyaan: "Ibukota Indonesia adalah?",
//       opsi: ["Jakarta", "Bandung", "Surabaya"],
//     },
//   ],
// };

// export default function Page() {
//   const { exam_id, id_user } = useParams();
//   const [currentSoal, setCurrentSoal] = useState(0);
//   const [jawaban, setJawaban] = useState({});
//   const [timer, setTimer] = useState(10);

//   const soalList = bankSoal[exam_id] || [];

//   // timer per soal
//   //   useEffect(() => {
//   // if (currentSoal >= soalList.length) return;

//   // setTimer(10); // misalnya 10 detik per soal (bisa ambil dari config exam)
//   // const countdown = setInterval(() => {
//   //   setTimer((prev) => {
//   //     if (prev === 1) {
//   //       clearInterval(countdown);
//   //       handleNext();
//   //       return 0;
//   //     }
//   //     return prev - 1;
//   //   });
//   // }, 1000);

//   // return () => clearInterval(countdown);
//   //   }, [currentSoal]);

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
//       console.log("Jawaban user:", id_user, jawaban);
//       alert("Ujian selesai!");
//     }
//   };

//   if (currentSoal >= soalList.length) {
//     return <div>Terima kasih, jawaban sudah direkam.</div>;
//   }

//   const soal = soalList[currentSoal];

//   return (
//     <div className="p-6 max-w-md mx-auto border rounded shadow">
//       <h2 className="text-lg font-bold mb-2">
//         Ujian {exam_id} – Peserta {id_user}
//       </h2>

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

// "use client";

// import TimerDisplay from "@/app/_components/TimerDisplay";
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
//   const { timer, id_user } = useParams();
//   // const id_user = params.id_user;
//   const [currentSoal, setCurrentSoal] = useState(0);
//   const [jawaban, setJawaban] = useState({});
//   const [timerRun, setTimerRun] = useState(timer);

//   // Timer untuk setiap soal
//   useEffect(() => {
//     if (currentSoal >= soalList.length) return;

//     // setTimer(10); // reset timer tiap soal
//     const countdown = setInterval(() => {
//       setTimerRun((prev) => {
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
//         <span className="text-red-600 font-semibold">
//           Waktu: {TimerDisplay(timerRun)}
//         </span>

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

import { TimeDisplay } from "@/app/_components/TimerDisplay";
import { useParams } from "next/navigation";

const exams = [
  {
    examsId: 123,
    question: "Ibukota Indonesia adalah?",
    answerOption: [
      { option: "Jakarta", isCorret: true, label: "A" },
      { option: "Bandung", isCorret: false, label: "B" },
      { option: "Surabaya", isCorret: false, label: "C" },
      { option: "Bali", isCorret: false, label: "D" },
      { option: "Tangerang", isCorret: false, label: "E" },
    ],
  },
  {
    examsId: 123,
    question: "Siapa Presiden Indonesia ketiga Indonesia?",
    answerOption: [
      { option: "Jokowidodo", isCorret: false, label: "A" },
      { option: "BJ. Habibie", isCorret: true, label: "B" },
      { option: "Soekarna", isCorret: false, label: "C" },
      { option: "Abdurahman Wahid", isCorret: false, label: "D" },
      { option: "Prabowo Subianto", isCorret: false, label: "E" },
    ],
  },
  {
    examsId: 123,
    question: "Apa singkatan dari MPR",
    answerOption: [
      { option: "Majelis Perwakilan Rakyat", isCorret: false, label: "A" },
      { option: "Majelis Perhimpunan Rakyat", isCorret: false, label: "B" },
      { option: "Majelis Perserikatan Rakyat", isCorret: false, label: "C" },
      { option: "Majelis Perseroan Rakyat", isCorret: false, label: "D" },
      { option: "Majelis Permusyawaratan Rakyat", isCorret: true, label: "E" },
    ],
  },
];

export default function Page() {
  const { timer, id_user } = useParams();

  return (
    <div className="flex justify-center items-center p-2 text-sm">
      <div className="flex flex-col w-full px-4 py-2 border rounded-xl shadow">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Soal 1</h1>
          <div className="text-xl font-bold">{TimeDisplay(Number(timer))}</div>
        </div>

        <div className="w-full">
          <div className="w-full px-2 py-2 border my-2 break-words text-xl text-justify font-bold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
            blanditiis in fugit officia ratione praesentium nisi placeat, a
            voluptate sed earum corporis tempore doloribus iste quidem libero
            quisquam atque! Iste unde rem voluptatum reprehenderit facilis
            consectetur quo consequuntur delen
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold pb-4">Jawaban :</h1>
        </div>
        <div className="flex flex-col gap-2 px-5">
          <div className="flex gap-2">
            <div>
              <button className="px-2 py-1 border rounded-lg hover:cursor-pointer hover:bg-blue-400 hover:text-white">
                A
              </button>
            </div>

            <button className="px-2 text-justify border">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
              deserunt porro laborum maxime aut quo nisi fugiat laudantium quae.
              Aspernatur a officiis assumenda eligendi ipsum laboriosam
              doloribus saepe delectus mollitia veritatis dolor nihil debitis
              tempora, possimus reprehenderit tempore quaerat commodi eos
              dolores in esse repellendus aut? Magni eos iste sed cupiditate
              odit? Earum adipisci accusamus molestias ratione recusandae
              voluptatem magnam iste? Numquam esse culpa quasi atque architecto
              libero necessitatibus laudantium vitae nobis, dignissimos,
              reiciendis dicta voluptates veritatis unde officiis, maxime fuga
              quisquam aliquid ipsa. Vitae inventore aliquam nam iure, earum
              delectus ipsa necessitatibus perferendis expedita, neque omnis non
              eveniet. Explicabo.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
