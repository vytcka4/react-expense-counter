import React, { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const [editing, isEditing] = useState(false);

  function saveExpeseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    isEditing(false);
    console.log(expenseData);
    props.onAddExpense(expenseData);
  }
  const startEditingHandler = () => {
    isEditing(true);
  };

  const cancelHandler = () => {
    isEditing(false);
  };

  return (
    <div className="new-expense">
      {!editing && (
        <button onClick={startEditingHandler}>Add new expense</button>
      )}
      {editing && (
        <NewExpenseForm
          onSaveExpenseData={saveExpeseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
