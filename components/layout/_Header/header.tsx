"use client";

import Container from "@/components/common/Container";
import ContainerFullwidth from "@/components/common/ContainerFullwidth";

import Logo from "../../common/Logo";
import UserMenu from "./components/UserMenu";
import styles from "./header.module.scss";

// Header component
const Header = () => {
  // destructuring props

  // state

  // context hooks

  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers

  // render
  return (
    <ContainerFullwidth className={styles.header}>
      <Container>
        <div className={styles.headerMenu}>
          <Logo />
          <UserMenu />
        </div>
      </Container>
    </ContainerFullwidth>
  );
};

// export
export default Header;
