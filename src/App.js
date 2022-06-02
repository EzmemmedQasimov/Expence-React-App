import './App.css';
import Expenses from "./components/Expensees/Expenses";
import NewExpense from "./components/Expensees/NewExpense";
import {useState} from "react";

const INITIAL_EXPENSES = [
    {
        id: 'e1',
        title: '',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },

];
const  App = () => {

    const [expenses,setExpenses] = useState(INITIAL_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses)=>{
            return [expense, ...prevExpenses];
        })

    }
    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses item={expenses}/>
        </div>
    );
}

export default App