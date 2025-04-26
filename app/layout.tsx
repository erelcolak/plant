import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import MainLayout from "@/components/layout/_MainLayout";

import { ModalContextProvider } from "@/contexts/ModalContext";
import { ServiceContextProvider } from "@/contexts/ServiceContext";
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
            <ServiceContextProvider>
              <ModalContextProvider>
                <MainLayout>{children}</MainLayout>
              </ModalContextProvider>
            </ServiceContextProvider>
          </ToastContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
