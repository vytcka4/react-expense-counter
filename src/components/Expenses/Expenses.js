import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import Card from "../UI/Card";

function Expenses(props) {
  const [YearChange, setYearChange] = useState("2020");
  function FilterChangeHandler(selectedYear) {
    setYearChange(selectedYear);
  }

  const filterExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === YearChange;
  });

  //
  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={YearChange}
          onChangeFilter={FilterChangeHandler}
        />
        <ExpensesChart expenses={filterExpenses} />
        <ExpensesList items={filterExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
