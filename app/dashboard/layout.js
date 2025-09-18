import MainLayout from "../_components/MainLayout";

export const metadata = {
  title: "Dashboard",
};
export default function Layout({ children }) {
  return <MainLayout>{children}</MainLayout>;
}
