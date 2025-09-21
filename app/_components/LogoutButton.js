import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { deleteCookies } from "../lib/auth/deleteCookies";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";

export const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await deleteCookies();
    Swal.fire("Berhasil Logout !", "", "success").then(() => router.push("/"));
  };
  return (
    <button
      className="h-8 w-12 rounded-lg px-3 py-1 hover:bg-white hover:text-black hover:cursor-pointer"
      onClick={handleLogout}
    >
      <ArrowRightStartOnRectangleIcon />
    </button>
  );
};
