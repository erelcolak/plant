import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import MainLayout from "@/components/layout/_MainLayout";

import { ModalContextProvider } from "@/contexts/ModalContext";
import { ThemeContextProvider } from "@/contexts/ThemeContext";
import { ToastContextProvider } from "@/contexts/ToastContext";

import { siteHeaderMetaData } from "@/utils/constants";

import "@/styles/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const urbanist = Urbanist({ subsets: ["latin", "latin-ext"], variable: "--font-urbanist" });

export const metadata: Metadata = siteHeaderMetaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="body" className={urbanist.className}>
        <ThemeContextProvider>
          <ToastContextProvider>
            <ModalContextProvider>
              <MainLayout>{children}</MainLayout>
            </ModalContextProvider>
          </ToastContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
