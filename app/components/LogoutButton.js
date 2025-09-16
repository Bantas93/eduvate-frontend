import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { deleteCookies } from "../lib/auth/deleteCookies";

export const LogoutButton = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await deleteCookies();
    Swal.fire("Berhasil Logout !", "", "success").then(() => router.push("/"));
  };
  return (
    <button className=" border rounded-lg px-2 py-1" onClick={handleLogout}>
      Logout
    </button>
  );
};
