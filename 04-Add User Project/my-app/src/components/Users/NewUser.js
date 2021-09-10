import React, { useState } from "react";
import styles from "./NewUser.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const NewUser = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [error, setError] = useState();
  const [enteredAge, setEnteredAge] = useState("");

  const usernameInputChangeHandler = (event) => {
    setEnteredUser(event.target.value);
  };

  const ageInputChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age",
      });
      return;
    }
    const userData = {
      id: Math.random.toString(),
      name: enteredUser,
      age: +enteredAge,
    };
    console.log(userData);
    props.onAddUser(userData);
    setEnteredUser("");
    setEnteredAge("");
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
            <input
              type="text"
              value={enteredUser}
              onChange={usernameInputChangeHandler}
            />
            <label>Age (Age)</label>
            <input
              type="number"
              min="1"
              value={enteredAge}
              onChange={ageInputChangeHandler}
            />
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </Wrapper>
  );
};

export default NewUser;
