import React, { useState, useRef } from "react";
import styles from "./NewUser.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const NewUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age",
      });
      return;
    }
    const userData = {
      id: Math.random.toString(),
      name: enteredName,
      age: +enteredUserAge,
    };
    props.onAddUser(userData);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={formSubmitHandler}>
          <div>
            <label>Username</label>
            <input type="text" ref={nameInputRef} />
            <label>Age (Age)</label>
            <input type="number" min="1" ref={ageInputRef} />
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </Wrapper>
  );
};

export default NewUser;
