import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [flag, setFlag] = useState("False");
  function saveDataHandler(enteredData) {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
  }
  function hideForm() {
    setFlag("False");
  }

  function showForm() {
    setFlag("True");
  }

  return (
    <div className="new-expense">
      {flag === "False" ? (
        <button onClick={showForm}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpense={saveDataHandler}
          flag={hideForm}
        ></ExpenseForm>
      )}
    </div>
  );
}
export default NewExpense;
