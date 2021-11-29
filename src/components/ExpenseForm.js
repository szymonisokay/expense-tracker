import React, { useState } from "react"

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [date, setDate] = useState("")
  const [formShown, setFormShown] = useState(false)

  const submitFormHandler = (event) => {
    event.preventDefault()

    if (!title || !amount || !date) return

    const newExpense = {
      title,
      amount: +amount,
      date: new Date(date),
    }

    setAmount("")
    setDate("")
    setTitle("")
    setFormShown(false)
    onAddExpense(newExpense)
  }

  if (!formShown) {
    return <button onClick={() => setFormShown(true)}>Add new expense</button>
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={() => setFormShown(false)}>
          Close
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
