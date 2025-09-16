export default function FormQuestion() {
  return (
    <div className="flex flex-col h-full bg-blue-200">
      <div className="bg-yellow-200">
        <div>Pertanyaan :</div>
        <textarea className="border h-auto w-full px-1" type="text" />
      </div>
      <div className="bg-emerald-200">
        <div>Jawaban :</div>
        <textarea className="border h-auto w-full px-1" type="text" />
      </div>
      <div className="bg-red-400">Tag Ujian Materi</div>
      <div className="bg-pink-200">SOAL SELANJUTNYA</div>
    </div>
  );
}
