import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jan Holda",
  description: "Hi, my name is Jan Holda. I´m an IT enthusiast. My love for technology began in my early childhood when I was fascinated by anything related to computers. By the time I started elementary school, I was already building my first computers and optimizing systems for people around me. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <Navigation/>
        {children}
        <footer className="footer">
          Developed in 2024 | CZ
        </footer>
      </body>
    </html>
  );
}
