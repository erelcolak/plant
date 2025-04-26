import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import MainLayout from "@/components/layout/_MainLayout";

import { GlobalDataContextProvider } from "@/contexts/GlobalDataContext";
import { ModalContextProvider } from "@/contexts/ModalContext";
import { ServiceContextProvider } from "@/contexts/ServiceContext";
import { ThemeContextProvider } from "@/contexts/ThemeContext";
import { ToastContextProvider } from "@/contexts/ToastContext";

import { siteHeaderMetaData } from "@/utils/constants";

import "@/styles/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

const urbanist = Urbanist({ subsets: ["latin", "latin-ext"], variable: "--font-urbanist" });

export const metadata: Metadata = siteHeaderMetaData;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locales = await getMessages();
  const language = await getLocale();

  return (
    <html lang={language}>
      <body id="body" className={urbanist.className}>
        <NextIntlClientProvider messages={locales}>
          <ThemeContextProvider>
            <ToastContextProvider>
              <ServiceContextProvider>
                <GlobalDataContextProvider>
                  <ModalContextProvider>
                    <MainLayout>{children}</MainLayout>
                  </ModalContextProvider>
                </GlobalDataContextProvider>
              </ServiceContextProvider>
            </ToastContextProvider>
          </ThemeContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
