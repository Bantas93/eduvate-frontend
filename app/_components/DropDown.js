"use client";

export default function Dropdown({ value, onChange, className }) {
  return (
    <select value={value} onChange={onChange} className={className} required>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
      <option value="E">E</option>
    </select>
  );
}
