import { useState } from 'react';
import ExpenseItem from './ExpenseItem'; 
import '../css/MainPageBackground.css'
import Card  from './card';

import Form from './Form';
import ExpenseFilter from './ExpenseFilter';

import ExpensesChart from './ExpensesChart';
function MainPage(props) {
  
  const [FilteredExpense, setFilteredExpense] = useState(props.expenses.filter((e) => e.date.getFullYear().toString() === '2023'));
  
  const NewExpense = (newData) => {
    props.sendtoApp(newData);
  }
  
  const filterExpense = (year) => {
    const expense = props.expenses.filter((e) => e.date.getFullYear().toString() === year);
    setFilteredExpense(expense);
  }
    return (
       <Card className='Background'>
        <Form onNewExpense={NewExpense} ></Form>
        <ExpenseFilter filterExpense = {filterExpense} ></ExpenseFilter>
        <ExpensesChart expenses = {FilteredExpense}></ExpensesChart>
        {
        FilteredExpense.length === 0 ? <p>No data</p>
        : FilteredExpense.map((e)=>
          <ExpenseItem key= {e.id} expenses = {e}></ExpenseItem>
        )
        
        }
       </Card>
    );
}


export default MainPage;
