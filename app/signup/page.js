"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    tenantName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (!formData[key]) {
        // setError(`Field ${key} Wajib diisi !`);
        Swal.fire("Gagal Daftar !", `${key} Wajib diisi`, "error");
        return;
      }
    }

    if (formData.password !== formData.passwordConfirm) {
      Swal.fire(
        "Gagal Daftar !",
        `Password dan Konfirmasi Password tidak sesuai`,
        "error"
      );
      return;
    }
    setError("");

    try {
      const res = await fetch("http://localhost:8080/api/v1/tenant/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Gagal mengakses API", res.status);
      }

      const data = await res.json();
      console.log(data);

      Swal.fire(
        "Daftar Berhasil !",
        "Wajib simpan ID tenant untuk login",
        "success"
      ).then(() => {
        return Swal.fire(
          `ID Tenant : ${data.tenantId}`,
          "Harap disimpan !",
          "warning"
        ).then(() => router.push("/"));
      });
    } catch (error) {
      console.error("error POST", error.message);
    }
  };

  const handelChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center h-screen w-full text-xs bg-[url('/images/bg1.png')] bg-cover bg-center">
      <div className="w-full max-w-sm flex flex-col">
        <div className="flex justify-center mb-6">
          <div className="flex items-center justify-center font-bold text-[#3B82F6]">
            <Image
              src="/images/logo.png"
              width={120}
              height={120}
              alt="Picture of the author"
              className="w-auto h-auto"
              priority
            />
          </div>
        </div>

        <form
          className=" bg-white border border-[#3B82F6] mx-10 shadow-lg rounded-3xl flex flex-col gap-4 px-8 py-5"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-row justify-center">
            <div className="font-bold text-xl">SIGN UP</div>
          </div>

          <div className="flex flex-col">
            <label className="font-bold">Nama Tenant</label>
            <input
              className="border border-[#3B82F6] rounded w-full px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
              type="text"
              name="tenantName"
              value={formData.tenantName}
              onChange={handelChange}
              placeholder="Masukkan Nama Tenant"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-bold">Email</label>
            <input
              className="border border-[#3B82F6] rounded w-full px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
              type="email"
              name="email"
              value={formData.email}
              onChange={handelChange}
              placeholder="Masukkan Email"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-bold">Password</label>
            <input
              className="border border-[#3B82F6] rounded w-full px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
              type="password"
              name="password"
              value={formData.password}
              onChange={handelChange}
              placeholder="Masukkan Password"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-bold">Konfirmasi Password</label>
            <input
              className="border border-[#3B82F6] rounded w-full px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
              type="password"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handelChange}
              placeholder="Masukkan Konfirmasi Password"
            />

            {error && (
              <p className="text-red-500 text-xs font-semibold mt-1">{error}</p>
            )}
          </div>

          <div className="flex flex-col mt-6 gap-3">
            <button
              type="submit"
              className="w-full text-center text-white font-bold py-2 rounded-lg hover:opacity-90 bg-[#3B82F6] transition hover:cursor-pointer"
            >
              Daftar
            </button>
            <button
              type="button"
              className="w-full text-center font-bold py-2 border border-gray-600 rounded-lg hover:bg-gray-100 transition hover:cursor-pointer"
              onClick={() => router.push("/")}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
