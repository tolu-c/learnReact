import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    // passing data to parent component => app
    props.onAddedExpense(expenseData);
  };
  
  return (
    <div className="bg-blue-400 p-6">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
}

export default NewExpense;
