// import {cookies} from "next/headers"
import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

import { CookieLanguage } from "@/utils/constants";

export default getRequestConfig(async () => {
  const cookieLocale = (await cookies()).get(CookieLanguage)?.value || "en";
  const locale = cookieLocale;
  // const locale = "en";

  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});
