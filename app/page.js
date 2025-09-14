"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [role, setRole] = useState("user");
  const [tenantId, setTenantId] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/v1/auth/tenant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tenantId: tenantId,
          username: username,
          password: password,
        }),
      });

      if (!res.ok) {
        throw new Error("Gagal mengakses API", res.status);
      }

      const data = await res.json();
      console.log(data.accessToken);
    } catch (error) {
      console.error("error POST", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full text-xs bg-[url('/images/bg.png')] bg-cover bg-center">
      <div className="w-full max-w-sm flex flex-col">
        <div className="flex justify-center mb-6">
          <div className="flex items-center justify-center font-bold text-[#3B82F6]">
            <Image
              src="/images/logo.png"
              width={150}
              height={150}
              alt="Picture of the author"
            />
          </div>
        </div>

        <form
          className="border border-[#3B82F6] mx-10 shadow-lg rounded-3xl flex flex-col gap-4 px-8 py-5"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-row">
            <div className="font-bold">Login as :</div>
            <div className="flex flex-row gap-4 justify-center items-center ps-5">
              {/* Radio User */}
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="role"
                  value="user"
                  checked={role === "user"}
                  onChange={(e) => setRole(e.target.value)}
                  className="accent-blue-600"
                />
                <span>User</span>
              </label>

              {/* Radio Tenant ID */}
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="role"
                  value="tenant"
                  checked={role === "tenant"}
                  onChange={(e) => setRole(e.target.value)}
                  className="accent-blue-600"
                />
                <span>Tenant ID</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-bold">Tenant ID</label>
            <input
              className="border border-[#3B82F6] rounded w-full px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
              type="text"
              name="tenantId"
              value={tenantId}
              onChange={(e) => setTenantId(e.target.value)}
              placeholder="Masukkan Tenant ID"
            />
          </div>

          {role === "user" && (
            <div className="flex flex-col">
              <label className="font-bold">Username</label>
              <input
                className="border border-[#3B82F6] rounded w-full px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Masukkan Username"
              />
            </div>
          )}

          <div className="flex flex-col">
            <label className="font-bold">Password</label>
            <input
              className="border border-[#3B82F6] rounded w-full px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan Password"
            />
          </div>

          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            <span>
              I agree to{" "}
              <Link href="" className="text-[#3B82F6] underline">
                Terms Service
              </Link>
              and{" "}
              <Link href="" className="text-[#3B82F6] underline">
                Privacy Policy
              </Link>
            </span>
          </div>

          <div className="flex flex-col mt-6 gap-3">
            <button
              type="submit"
              className="w-full text-center text-white font-bold py-2 rounded-lg hover:opacity-90 bg-[#3B82F6] transition hover:cursor-pointer"
            >
              Login
            </button>
            <button
              type="button"
              className="w-full text-center font-bold py-2 border border-gray-600 rounded-lg hover:bg-gray-100 transition hover:cursor-pointer"
              onClick={() => router.push("/signup")}
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
