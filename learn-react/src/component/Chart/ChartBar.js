function ChartBar(props) {
  let barFillHeight = "0%";

  if (props.max > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  console.log(barFillHeight);

  return (
    <div className='bg-purple-100 p-2 w-full text-center'>
      <div className='h-36 flex justify-center'>
        <div style={{ height: barFillHeight }} className="bg-purple-800 w-3 h-auto rounded-md border-purple-200 border-1 "></div>
      </div>

      <div className='text-purple-800 font-semibold text-lg'>{props.label}</div>
    </div>
  );
}

export default ChartBar;
