import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };
    props.onAddExpense(expenseData);
  };

  const [isShow, setIsShow] = useState(false);

  const onClickHandler = (e) => {
    setIsShow(!isShow);
  };

  if (!isShow) {
    return (
      <div className="new-expense">
        <button onClick={onClickHandler}> Add New Expense</button>
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClickEvent={onClickHandler}
        />
        ;
      </div>
    );
  }
};

export default NewExpense;
