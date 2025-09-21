import SectionDraft from "../_components/form/SectionDraft";
import SectionForm from "../_components/form/SectionForm";

export default function Page() {
  return (
    <div className="grid grid-rows-[40px_1fr] grid-cols-[5fr_2fr] h-full">
      <div className="row-span-1 col-span-2 border border-gray-300 flex items-center justify-between px-4">
        Buat Soal Baru
      </div>
      <div className="row-span-1 col-span-1 border border-gray-300 shadow- p-2">
        <SectionForm />
      </div>
      <div className="row-span-1 col-span-1 bg-white border border-gray-300 p-2">
        <SectionDraft />
      </div>
    </div>
  );
}
