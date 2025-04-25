import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import { siteHeaderMetaData } from "@/utils/constants";
import { ThemeContextProvider } from "@/contexts/ThemeContext";

import "@/styles/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import MainLayout from "@/components/layout/_MainLayout";

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
          <MainLayout>{children}</MainLayout>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
