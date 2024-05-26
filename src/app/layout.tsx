import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/context/Theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vitor Medina",
  description: "Portifolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider>
          <main className="dark:bg-zinc-900">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
