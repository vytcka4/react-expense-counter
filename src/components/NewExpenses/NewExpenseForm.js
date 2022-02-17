import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  //
  const [enteredTittle, setEnteredTittle] = useState("");
  function tittleChangeHandler(event) {
    setEnteredTittle(event.target.value);
  }

  const [enteredAmount, setEnteredAmount] = useState("");
  function amountChangeHandler(event) {
    // console.log(event.target.value);
    setEnteredAmount(event.target.value);
  }

  const [enteredDate, setEnteredDate] = useState("");
  function dateChangeHandler(event) {
    // console.log(event.target.value);
    setEnteredDate(event.target.value);
  }
  //
  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: enteredTittle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTittle(" ");
    setEnteredAmount(" ");
    setEnteredDate(" ");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Tittle</label>
          <input
            type="text"
            value={enteredTittle}
            onChange={tittleChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label> Amount</label>
          <input
            type="number"
            min=" 0.01"
            step=" 0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label> Date</label>
          <input
            type="date"
            min="2019-01-1"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
