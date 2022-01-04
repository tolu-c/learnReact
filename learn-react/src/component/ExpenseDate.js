function ExpenseDate({ data }) {
  const month = data.toLocaleString('en-US', { month: 'long' })
  const day = data.toLocaleString('en-US', { day: '2-digit' })
  const year = data.getFullYear()

  return (
    <div className='bg-transparent border shadow-lg border-gray-700 p-2 rounded-md text-center text-gray-800'>
      <div className='font-bold text-lg '>{month}</div>
      <div className='text-xl font-medium'>{day}</div>
      <div className='text-sm'>{year}</div>
    </div>
  )
}

export default ExpenseDate
