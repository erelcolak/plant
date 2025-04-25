"use client";

import classNames from "classnames";

import Button from "../Button/button";
import Loader from "../Loader";

import useModal from "@/hooks/useModal";

import { IModal } from "./modal.types";
import styles from "./modal.module.scss";

// Modal component
const Modal = (props: IModal) => {
  // destructuring props
  const { children, isFooterLeftButtonAvailable = true, isFooterRightButtonAvailable = true, footerLeftButton, footerRightButton, id, loading } = props;
  // state

  // context hooks
  const { hideModal } = useModal();
  // queries

  // mutations

  // formik

  // effect

  // other variables/functions/handlers
  const handleHideModal = () => {
    hideModal(id);
  };
  // render
  return (
    <div className={styles.modalOverlay} onClick={handleHideModal}>
      <div id={id} className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {loading && <Loader rounded />}
        <div className={styles.header}>
          <Button id="Modal-Header-Close-Button" onClick={handleHideModal} icon="x-lg" onlyIcon />
        </div>
        <div className={styles.body}>{children}</div>
        <div
          className={classNames(styles.footer, isFooterLeftButtonAvailable && isFooterRightButtonAvailable ? styles.multipleControls : styles.singleControl)}
        >
          <Button id={`${id}-FooterLeftButton`} onClick={handleHideModal} text="İptal" {...(footerLeftButton ? footerLeftButton : null)} />
          <Button id={`${id}-FooterRightButton`} onClick={() => null} text="Tamam" {...(footerRightButton ? footerRightButton : null)} />
        </div>
      </div>
    </div>
  );
};

// export
export default Modal;
