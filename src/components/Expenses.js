import React, { useState } from "react"
import Card from "./Card"
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter"

const Expenses = ({ items }) => {
  const [selectedYear, setSelectedYear] = useState("2021")

  const handleYearSelection = (year) => {
    setSelectedYear(year)
  }

  return (
    <Card>
      <ExpensesFilter
        year={selectedYear}
        onYearSelection={handleYearSelection}
      />
      {items
        .filter((item) => item.date.getFullYear().toString() === selectedYear)
        .map((item) => (
          <ExpenseItem key={item.id} {...item} />
        ))}
    </Card>
  )
}

export default Expenses
