
import MainPage from './Components/js/MainPage';
import React,{useState} from 'react';
const Initial_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];
function App() {    
  const [expenses, updateExpense] = useState(Initial_expenses);
  
  const sendtoApp = (newData) => {
    newData.id= Math.random;
    updateExpense([...Initial_expenses, newData]);
  }
  return (
    <div>
      <MainPage sendtoApp = {sendtoApp} expenses = {expenses} ></MainPage>
    </div>
  );
}

export default App;
