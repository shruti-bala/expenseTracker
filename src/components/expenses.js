import React, { useState } from "react";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
function Expenses(props) {
  //to get the year from child component("ExpenseFilter")
  const [selectedYear, setSelectedYear] = useState("");
  function newYear(Year) {
    setSelectedYear(Year);
    console.log(Year);
  }
  // Filtering the expenses according to the year
  const FilteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      {/* dynamically outputing the list of expenses */}
      <Card className="expenses">
        <ExpensesFilter filterYear={selectedYear} onChangeYear={newYear} />
        <ExpenseChart expenses={FilteredExpense} />
        <ExpenseList expense={FilteredExpense} />
        {/* "&&" operator executes the second expression if the first statement holds true */}
        {FilteredExpense.length === 0 && (
          <p className="faulty">No Expenses found</p>
        )}
      </Card>
    </div>
  );
}
export default Expenses;
