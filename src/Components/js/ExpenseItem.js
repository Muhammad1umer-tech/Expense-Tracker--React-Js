import React, { useState } from 'react';

import '../css/ExpenseItem.css'

import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {

    const [specialTitle, setTitle] = useState(props.expenses.title);

    function funcEvent() {
        setTitle('commit');
        console.log("jeje")
    }
    return (
        <div className="expense-item">
        <ExpenseDate date = {props.expenses.date} ></ExpenseDate>
        <div className="expense-item__description">{specialTitle}</div>
        <div className="expense-item__price">{props.expenses.amount+' $'}</div>
        <button onClick={funcEvent}>Click for updation</button>
    </div>
    );
}

export default ExpenseItem;
