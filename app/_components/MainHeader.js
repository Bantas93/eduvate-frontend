"use client";
import { LogoutButton } from "./LogoutButton";

export default function MainHeader() {
  return (
    <header className="row-span-1 col-span-2 bg-[#1E3A8A] text-white flex items-center justify-between px-4 tracking-widest">
      Tenant name
      <LogoutButton />
    </header>
  );
}
