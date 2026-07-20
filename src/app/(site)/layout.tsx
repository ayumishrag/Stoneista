import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import { PopupProvider } from "@/components/PopupContext";
import Popup from "@/components/Popup";

const figTree = localFont({
  src: "../../../public/fonts/Figtree-VariableFont_wght.ttf",
  variable: "--font-figTree",
  display: "swap",
});

const awesomeSerif = localFont({
  src: "../../../public/fonts/Awesome-Serif-VAR-VF.ttf",
  variable: "--font-awesome-serif",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stoneista: Where Marble Meets Perfection",
  description: "Stoneista: Where Marble Meets Perfection",
  icons: {
    icon: "/app-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-stblack">
      <body className={`${awesomeSerif.variable} ${figTree.variable} w-screen`}>
        <PopupProvider>
          <Header />
          <div className="mt-20">{children}</div>
          <Footer />
          <Popup />
        </PopupProvider>
      </body>
    </html>
  );
}
