import React, { useState } from "react"
import Card from "./Card"
import ExpenseItem from "./ExpenseItem"
import ExpensesChart from "./ExpensesChart"
import ExpensesFilter from "./ExpensesFilter"

const Expenses = ({ items }) => {
  const [selectedYear, setSelectedYear] = useState("2021")

  const handleYearSelection = (year) => {
    setSelectedYear(year)
  }

  const filteredExpenses = items.filter(
    (item) => item.date.getFullYear().toString() === selectedYear
  )

  return (
    <Card>
      <ExpensesFilter
        year={selectedYear}
        onYearSelection={handleYearSelection}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.length > 0 ? (
        filteredExpenses.map((item) => <ExpenseItem key={item.id} {...item} />)
      ) : (
        <p className="no-expenses">No expenses found</p>
      )}
    </Card>
  )
}

export default Expenses
