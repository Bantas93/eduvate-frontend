"use client";
import { useRouter } from "next/navigation";
import { deleteCookies } from "../lib/auth/deleteCookies";

const Page = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await deleteCookies();
    router.push("/");
  };
  return (
    <div className="text-center">
      <button className=" border rounded-lg px-2 py-1" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Page;
