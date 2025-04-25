"use client";

import Toast from "@/components/common/Toast";

import { IToastContainer } from "./toastContainer.types";
import styles from "./toastContainer.module.scss";

// ToastContainer component
const ToastContainer = (props: IToastContainer) => {
  // destructuring props
  const { data } = props;
  // state

  // context hooks

  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers
  if (data.length === 0) return null;
  // render
  return (
    <div className={styles.toastContainer}>
      {data.map((toast, index) => {
        return <Toast key={`Toast-${index}`} {...toast} />;
      })}
    </div>
  );
};

// export
export default ToastContainer;
