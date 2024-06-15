"use client";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Correct usage

  return (
      <html lang="en">
        <body className={inter.className}>
        <ThemeProvider
              attribute="class"
              defaultTheme="system">
          <div className="bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)] dark:bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]">
            <Navbar />
            <main>{children}</main>
            <Footer />
            </div>
            </ThemeProvider>
          </body>
      </html>
    );
}
