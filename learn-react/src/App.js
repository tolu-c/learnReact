import "./App.css";
import ExpenseItem from "./component/ExpenseItem";
import NewExpense from "./component/NewExpense/NewExpense";

function App() {
  const addExpenseData = (expense) => {
    const addedExpenseData = {
      ...expense,
    };
    console.log(addedExpenseData);
  };
  
  return (
    <div className="container p-4 mx-auto my-12">
      <NewExpense onAddedExpense={addExpenseData} />
      <div className="container p-4 mx-auto my-12 bg-gray-200">
        <ExpenseItem />
      </div>
    </div>
  );
}

export default App;
