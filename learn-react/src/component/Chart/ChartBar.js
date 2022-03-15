function ChartBar(props) {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  console.log(barFillHeight);

  return (
    <div className='bg-purple-100 p-2 w-full text-center flex justify-center flex-col items-center'>
      <div className='h-36 flex justify-center items-center w-3 bg-purple-400 rounded-md'>
        <div style={{ height: barFillHeight }} className="bg-purple-800 w-5/6 rounded-md border-purple-200 border-1 justify-items-center"></div>
      </div>

      <div className='text-purple-800 font-semibold text-lg'>{props.label}</div>
    </div>
  );
}

export default ChartBar;
