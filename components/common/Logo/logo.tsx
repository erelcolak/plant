"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { routes } from "@/utils/routes";

import styles from "./logo.module.scss";

// Logo component
const Logo = () => {
  // destructuring props

  // state

  // context hooks
  const router = useRouter();
  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers

  // render
  return (
    <div
      className={styles.logo}
      onClick={() => {
        router.push(routes.home.url);
      }}
    >
      <Image width={377} height={76} alt="" src={`/images/logo/plantcare.png`} className={styles.image} />
    </div>
  );
};

// export
export default Logo;
