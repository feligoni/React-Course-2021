import React from "react";
import styles from "./ErrorModal.module.css";

import Card from "../Card/Card";
import Button from "../Button/Button";

const ErrorModal = (props) => {
  return (
    <div>
      <div onClick={props.onConfirm} className={styles.backdrop} />
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
    </div>
  );
};

export default ErrorModal;
