"use client";

import { useContext } from "react";

import { IToast, ToastStatus } from "@/components/common/Toast/toast.types";

import { ToastContext } from "@/contexts/ToastContext";
const toastTimoutDuration = 5;

const useToast = () => {
  const { setToasts } = useContext(ToastContext);

  const showToast = ({ text = "", status = ToastStatus.error }) => {
    const _toast: IToast = {
      id: new Date().getTime().toString(),
      status,
      text,
    };
    setToasts((prevToastList: IToast[]) => [...prevToastList, _toast]);
    setTimeout(() => {
      hideToast(_toast.id as string);
    }, 1000 * toastTimoutDuration);
  };

  const hideToast = (id: string) => {
    setToasts((prevToastList: IToast[]) => prevToastList.filter((toast) => toast.id !== id));
  };

  return {
    showToast,
    hideToast,
  };
};

export default useToast;
