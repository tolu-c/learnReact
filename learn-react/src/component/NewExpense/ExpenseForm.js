import { useState } from "react";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let data = {
      titleEntered: title,
      amountEntered: amount,
      dateEntered: date,
    };
    // console.log(data);
    // passing data to parent component
    props.onSaveExpenseData(data);

    // clears state of form after been submitted
    setTitle("");
    setAmount("");
    setDate("");
  }

  return (
    <form className="flex flex-wrap" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-2 basis-1/2 p-6 mb-6">
        <label htmlFor="title" className="text-3xl font-bold text-blue-800">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          id="amount"
          min="0.01"
          step="0.01"
          className="bg-white border h-10 runded-lg p-2 focus:outline-none text-gray-700 text-lg"
        />
      </div>
      <div className="flex flex-col space-y-2 p-6 mb-6 basis-full">
        <label htmlFor="date" className="text-3xl font-bold text-blue-800">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          min="2020-01-01"
          max="2022-12-31"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="bg-white border h-10 runded-lg p-2 focus:outline-none text-gray-700 text-lg"
        />
      </div>
      <div className="basis-full flex justify-center">
        <button
          type="button"
          className="capitalize bg-red-700 hover:bg-red-800 text-white font-bold w-1/2 rounded-lg text-lg"
          onClick={props.onStopEdit}
        >
          cancel
        </button>
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
