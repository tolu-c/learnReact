import expenses from '../data/expenses'
import ExpenseDate from './ExpenseDate'

function ExpenseItem() {
    return (
        <div>
            {
                expenses.map(expense => (
                    <div key={expense.id} className='flex justify-between p-3 border border-gray-400 rounded-lg my-4 items-center shadow-md'>
                        <ExpenseDate data={expense.date} />
                        <div className='font-medium text-2xl text-gray-600'>{expense.title}</div>
                        <div className='text-right text-xl font-bold text-gray-800 mr-4'>${expense.amount}</div>
                    </div>
                ))
            }

        </div>
    )
}

export default ExpenseItem
