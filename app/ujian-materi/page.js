import FormQuestion from "../_components/form/FormQuestion";

export default function Page() {
  return (
    <div className="grid grid-rows-[40px_1fr] grid-cols-[2fr_1fr] h-full">
      <div className="row-span-1 col-span-2 border border-gray-300 flex items-center justify-between px-4">
        Buat Soal Baru
      </div>
      <div className="row-span-1 col-span-1 bg-[#F3F4F6] border border-gray-300 shadow- p-2">
        <FormQuestion />
      </div>
      <div className="row-span-1 col-span-1 bg-white border border-gray-300 p-2">
        Draft soal
      </div>
    </div>
  );
}
