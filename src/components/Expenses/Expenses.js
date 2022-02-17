import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

import Card from "../UI/Card";
function Expenses(props) {
  const [YearChange, setYearChange] = useState("2020");
  function FilterChangeHandler(selectedYear) {
    setYearChange(selectedYear);
  }

  //
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={YearChange}
        onChangeFilter={FilterChangeHandler}
      ></ExpensesFilter>
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
