import React from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = ({ date, title, amount }) => {
    const [newTtile, setNewTitle] = React.useState(title);

    const handleClick = () => {
        setNewTitle('asdas')
    }

    return (
        <div className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{newTtile}</h2>
                <div className="expense-item__price">${amount}</div>
                <button onClick={handleClick}>Click</button>
            </div>
        </div>
    )
}

export default ExpenseItem
