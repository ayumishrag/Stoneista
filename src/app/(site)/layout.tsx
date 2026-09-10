import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import { PopupProvider } from "@/components/PopupContext";
import Popup from "@/components/Popup";
import { ThemeProvider } from "@/context/ThemeContext";

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
    <html
      lang="en"
      style={{
        background: "var(--st-bg-page)",
        color: "var(--st-text-primary)",
      }}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('stoneista-theme');if(t==='light'){document.documentElement.classList.add('light');}else if(!t&&!window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('light');}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${awesomeSerif.variable} ${figTree.variable} w-screen`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <PopupProvider>
            <Header />
            <div className="mt-20">{children}</div>
            <Footer />
            <Popup />
          </PopupProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
