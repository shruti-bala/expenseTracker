import ChartBar from "./ChartBar";
import "./Chart.css";
function Chart(props) {
  const valueArray = props.dataPoints.map((dataPoints) => dataPoints.value);
  const maxValuePoint = Math.max(...valueArray);
  console.log(maxValuePoint);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValuePoint}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
export default Chart;
