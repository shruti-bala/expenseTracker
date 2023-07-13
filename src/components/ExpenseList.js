import ExpenseItem from "./expenseItem";
import "./ExpenseList.css";
function ExpenseList(props) {
  return (
    <div className="expenses-list">
      {props.expense.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
}
export default ExpenseList;
