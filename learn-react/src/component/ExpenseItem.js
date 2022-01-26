import expenses from '../data/expenses'
import ExpenseDate from './ExpenseDate'
import React, { useState } from 'react'



function ExpenseItem() {
    let [title, setTitle] = useState()

    function handleClick(e) {
        e.preventDefault()
        setTitle('Updated')
        console.log('button clicked');
    }

    return (
        <div>
            {
                expenses.map((expense, index) => (
                    <div key={expense.id}>
                        <div key={expense.id} className='flex justify-between p-3 border border-gray-400 rounded-lg my-4 items-center shadow-md'>
                            <ExpenseDate data={expense.date} />
                            <div value={title} className='font-medium text-2xl text-gray-600'>{expense.title}</div>
                            <div className='text-right text-xl font-bold text-gray-800 mr-4'>${expense.amount}</div>
                        </div>
                        <button onClick={handleClick}>Change title</button>
                    </div>
                ))
            }

        </div>
    )
}

export default ExpenseItem
