import { useRef } from "react";

export default function AutoTextarea({ onChange, placeholder, value }) {
  const ref = useRef(null);

  const handleInput = () => {
    const el = ref.current;
    el.value = el.value.replace(/\n/g, " ");
    el.style.height = "auto"; // reset dulu
    el.style.height = el.scrollHeight + "px"; // sesuaikan isi
  };

  return (
    <textarea
      type="text"
      ref={ref}
      className="w-full resize-none overflow-hidden p-2 border rounded border-[#3B82F6]"
      rows={1}
      onInput={handleInput}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
}
