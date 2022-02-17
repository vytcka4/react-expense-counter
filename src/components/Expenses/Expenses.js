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
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
