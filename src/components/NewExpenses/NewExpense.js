import React from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  function saveExpeseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={saveExpeseDataHandler} />
    </div>
  );
};

export default NewExpense;
