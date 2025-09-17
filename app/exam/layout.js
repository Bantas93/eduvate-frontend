import MainLayout from "../_components/MainLayout";
import { QuestionsProvider } from "../context/QuetionsContext";

export const metadata = {
  title: {
    template: "%s | Eduvate",
    default: "Ujian Materi",
  },
};
export default function Layout({ children }) {
  return (
    <MainLayout>
      <QuestionsProvider>{children}</QuestionsProvider>
    </MainLayout>
  );
}
