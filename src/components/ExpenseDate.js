import "./ExpenseDate.css";
import Card from "./Card";
function expenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <Card className="main_body">
      <div className="expense__date">{day}</div>
      <div className="expense__month">{month}</div>
      <div className="expense__year">{year}</div>
    </Card>
  );
}

export default expenseDate;
