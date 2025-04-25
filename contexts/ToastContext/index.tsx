"use client";
import { createContext, useState } from "react";

import { IToast } from "@/components/common/Toast/toast.types";
import ToastContainer from "@/components/layout/_ToastContainer";

const ToastContext = createContext<any | null>(null);

// ToastContextProvider component
const ToastContextProvider = (props: any) => {
  // destructuring props

  // state
  const [toasts, setToasts] = useState<IToast[]>([]);
  // context hooks

  // queries

  // effect

  // other variables/functions/handlers

  // render
  return (
    <ToastContext.Provider
      value={{
        toasts,
        setToasts,
      }}
    >
      <ToastContainer data={toasts} />
      {props.children}
    </ToastContext.Provider>
  );
};

// export
export { ToastContext, ToastContextProvider };
