import { useState } from "react";

function ExpenseForm() {
    const [title, setTitle] = useState('')
  const titleChangeHandler = (event) => {
      setTitle(event.target.value)
  };
  return (
    <form className="flex flex-wrap">
      <div className="flex flex-col space-y-2 basis-1/2 p-6 mb-6">
        <label htmlFor="title" className="text-3xl font-bold text-blue-800">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={titleChangeHandler}
          className="bg-white border h-10 runded-lg p-2 focus:outline-none text-gray-700 text-lg"
        />
      </div>
      <div className="flex flex-col space-y-2 basis-1/2 p-6 mb-6">
        <label htmlFor="amount" className="text-3xl font-bold text-blue-800">
          Amount
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="0.01"
          step="0.01"
          className="bg-white border h-10 runded-lg p-2 focus:outline-none text-gray-700 text-lg"
        />
      </div>
      <div className="basis-full">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          min="2020-01-01"
          max="2022-12-31"
        />
      </div>
      <div className="basis-full flex justify-center">
        <button
          type="submit"
          className="w-3/4 text-2xl bg-blue-700 p-4 text-white font-bold capitalize rounded-2xl shadown-md shadow-blue-400 hover:shadow-2xl"
        >
          Add expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
