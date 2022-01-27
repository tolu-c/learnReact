import "./App.css";
import ExpenseItem from "./component/ExpenseItem";
import NewExpense from "./component/NewExpense/NewExpense";
import ExpenseFilter from './component/ExpenseFilter'
import { useState } from "react";


function App() {
  const [filteredYear, setFilteredYear] = useState("2020");

  const addExpenseData = (expense) => {
    const addedExpenseData = {
      ...expense,
    };
    console.log(addedExpenseData);
  };

  const addExpenseFilterYear = year => {
    setFilteredYear(year)
    console.log(filteredYear);
  }

  return (
    <div className="font-sans container p-4 mx-auto my-12">
      <NewExpense onAddedExpense={addExpenseData} />
      <div className="container p-4 mx-auto my-12 bg-gray-200">
        <ExpenseFilter onSaveExpenseFilterYear={addExpenseFilterYear} />
        <ExpenseItem />
      </div>
    </div>
  );
}

export default App;
