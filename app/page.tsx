"use client";

import { useEffect } from "react";

import useToast from "@/hooks/useToast";

// App component
const App = () => {
  // destructuring props

  // state

  // context hooks
  const { showToast } = useToast();
  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers
  useEffect(() => {
    showToast({
      text: "lorem",
    });
  }, []);
  // render
  return <></>;
};

// export
export default App;
