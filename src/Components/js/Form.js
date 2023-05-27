import React, {useState} from 'react';
import '../css/Form.css';
import '../css/NewExpenses.css'

function Form(props) {

    const [entertedTitle, setEnteredTitle] = useState('');
    const [entertedAmount, setEnteredAmount] = useState('');
    const [entertedDate, setEnteredDate ] = useState('');

    const titlefunc = (e) =>{
        setEnteredTitle(e.target.value);
    };
    const amountfunc = (e) =>{
        setEnteredAmount(e.target.value);
    };
    const datefunc = (e) =>{
        setEnteredDate(e.target.value);
    };


    const submitEvent = (e) => {
        e.preventDefault();
        const NewExpenseData = {
            title: entertedTitle,
            amount:entertedAmount,
            date: new Date(entertedDate),
        }
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onNewExpense(NewExpenseData);
    }

        
    return (
     <div className='new-expense'>
           <form onSubmit={submitEvent}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input value = {entertedTitle} onChange={titlefunc} type="text"></input>
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input value = {entertedAmount} onChange={amountfunc} type="number" min="0.01" step="0.01"></input>
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input value = {entertedDate} onChange={datefunc} type="date" min="2020-01-01" max="2023-12-31"></input>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
     </div>
    );
}

export default Form;