import MainLayout from "../_components/MainLayout";

export const metadata = {
  title: "Exam Class",
};
export default function Layout({ children }) {
  return <MainLayout>{children}</MainLayout>;
}
