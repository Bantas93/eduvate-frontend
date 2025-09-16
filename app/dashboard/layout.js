import MainLayout from "../_components/MainLayout";

export const metadata = {
  title: {
    template: "%s | Eduvate",
    default: "Dashboard",
  },
};
export default function Layout({ children }) {
  return <MainLayout>{children}</MainLayout>;
}
