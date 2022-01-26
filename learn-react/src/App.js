import "./App.css";
import ExpenseItem from "./component/ExpenseItem";
import NewExpense from "./component/NewExpense/NewExpense";

function App() {
  return (
    <div className="container p-4 mx-auto my-12">
      <NewExpense />
      <div className="container p-4 mx-auto my-12 bg-gray-200">
        <ExpenseItem />
      </div>
    </div>
  );
}

export default App;
