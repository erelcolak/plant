import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import { siteHeaderMetaData } from "@/utils/constants";
import "@/styles/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ThemeContextProvider } from "@/contexts/ThemeContext";

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
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
