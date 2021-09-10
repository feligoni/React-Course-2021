import React, { useState } from "react";
import "./App.css";
import NewUser from "./components/Users/NewUser.js";
import UserList from "./components/Users/UserList.js";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (usersList) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, usersList];
    });
  };
  return (
    <React.Fragment>
      <NewUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </React.Fragment>
  );
}

export default App;
