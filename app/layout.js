import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Work_Sans } from "next/font/google";

export const metadata = {
  title: "Projeto PAP",
  description: "",
};

const worksans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={worksans.className}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>{children}</body>
    </html>
  );
}
