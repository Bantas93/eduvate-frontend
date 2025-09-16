import "./globals.css";

export const metadata = {
  title: {
    template: "%s | Eduvate",
    default: "Login",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
