import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmt, setAmt] = useState("");
  const [enteredDate, setDate] = useState("");

  function titleChange(event) {
    setTitle(event.target.value);
  }
  function amtChange(event) {
    setAmt(event.target.value);
  }
  function dateChange(event) {
    setDate(event.target.value);
  }

  function submitHandler(event) {
    //preventDefault prevents the page from reloading when the form is submitted
    event.preventDefault();
    const enteredData = {
      title: enteredTitle,
      amount: +enteredAmt,
      date: new Date(enteredDate),
    };
    props.onSaveExpense(enteredData);
    setTitle("");
    setAmt("");
    setDate("");
    props.flag();
  }
  function cancelHandler() {
    props.flag();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChange}
          ></input>
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            min="0"
            step="0.01"
            value={enteredAmt}
            onChange={amtChange}
          ></input>
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChange}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
      </div>
    </form>
  );
}
export default ExpenseForm;
