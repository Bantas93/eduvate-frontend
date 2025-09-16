import MainHeader from "../_components/MainHeader";
import SideNav from "../_components/SideNav";
import MainFooter from "./MainFooter";

export default function MainLayout({ children }) {
  return (
    <section className="grid grid-rows-[40px_1fr] grid-cols-[200px_1fr] h-screen">
      <MainHeader />
      <SideNav />
      <main className="row-span-1 col-span-1 bg-white p-4">{children}</main>
      <MainFooter />
    </section>
  );
}
