function ExpenseFilter(props) {
  function selecthandler(e) {
    e.preventDefault();
    let selectedYear = e.target.value;
    props.onSaveExpenseFilterYear(selectedYear);
  }
  
  return (
    <div className="my-4 border bg-gray-400 text-gray-800 p-6 flex justify-end">
      <div className="flex space-x-2">
        <label className="text-lg font-semibold text-gray-900 capitalize">
          Fliter by year
        </label>
        <select onChange={selecthandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
