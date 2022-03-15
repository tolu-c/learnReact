import ChartBar from "./ChartBar";

function Chart(props) {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointsValues);

  return (
    <div className='flex'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
