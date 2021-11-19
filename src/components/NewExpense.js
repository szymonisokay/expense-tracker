import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ addExpense }) => {
  const handleAddExpense = (expense) => {
    addExpense(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={handleAddExpense} />
    </div>
  );
};

export default NewExpense;
