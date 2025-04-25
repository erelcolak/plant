"use client";

import { IMainLayout } from "./mainLayout.types";

import Header from "../_Header";
import Footer from "../_Footer";
import Body from "../_Body";

import styles from "./mainLayout.module.scss";

// MainLayout component
const MainLayout = (props: IMainLayout) => {
  // destructuring props
  const { children } = props;
  // state

  // context hooks

  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers

  // render
  return (
    <div className={styles.mainLayout}>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </div>
  );
};

// export
export default MainLayout;
