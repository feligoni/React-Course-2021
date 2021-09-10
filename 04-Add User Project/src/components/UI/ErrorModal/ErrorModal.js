import React from "react";
import styles from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

import Card from "../Card/Card";
import Button from "../Button/Button";

const Backdrop = (props) => {
  return <div onClick={props.onConfirm} className={styles.backdrop} />;
};

const Overlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm} type="Cancel">
          Okay
        </Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
