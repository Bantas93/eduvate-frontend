import MainLayout from "../_components/MainLayout";
import { QuestionsProvider } from "../context/QuetionsContext";

export const metadata = {
  title: "Soal materi",
};
export default function Layout({ children }) {
  return (
    <MainLayout>
      <QuestionsProvider>{children}</QuestionsProvider>
    </MainLayout>
  );
}
