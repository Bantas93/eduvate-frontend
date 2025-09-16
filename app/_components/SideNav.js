"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/ujian-materi", label: "Ujian Materi" },
  ];
  return (
    <aside className="row-span-1 col-span-1 bg-[#F3F4F6] border border-gray-300 shadow- p-4">
      <div className="flex justify-center mb-6 px-10">
        <div className="flex items-center justify-center font-bold text-[#3B82F6]">
          <Image
            src="/images/logo.png"
            width={100}
            height={100}
            alt="Picture of the author"
            className="w-auto h-auto"
            priority
          />
        </div>
      </div>

      <nav className="flex flex-col gap-2 text-sm">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`p-2 rounded border border-[#3B82F6] text-[#3B82F6] transition
              ${
                isActive
                  ? "bg-[#3B82F6] text-white"
                  : "hover:bg-[#3B82F6] hover:text-white"
              }
            `}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
