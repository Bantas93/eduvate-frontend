import "./globals.css";

export const metadata = {
  title: {
    default: "Eduvate - Platform Belajar",
    template: "%s | Eduvate",
  },
  description:
    "Eduvate adalah platform pembelajaran modern untuk siswa, guru, dan tenaga pendidik.",
  keywords: ["Eduvate", "Belajar Online", "Platform Pendidikan", "Kursus"],
  authors: [{ name: "Eduvate Team" }],
  creator: "Eduvate",
  publisher: "Eduvate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
