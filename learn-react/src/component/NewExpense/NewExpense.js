import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    // passing data to parent component => app
    props.onAddedExpense(expenseData);
  };

  function startEditing() {
    setIsEditing(true);
  }

  function stopEditing() {
    setIsEditing(false);
  }

  return (
    <div className="bg-blue-400 p-6">
      {!isEditing && (
        <button
          onClick={startEditing}
          className="w-3/4 text-2xl bg-blue-700 p-4 text-white font-bold capitalize rounded-2xl shadown-md shadow-blue-400 hover:shadow-2xl"
        >
          Add New Expense
        </button>
      )}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseData} onStopEdit={stopEditing} />}
    </div>
  );
}

export default NewExpense;
