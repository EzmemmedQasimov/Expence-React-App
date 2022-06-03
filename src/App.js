import './App.css';
import Expenses from "./components/Expensees/Expenses";
import NewExpense from "./components/Expensees/NewExpense";
import {useState} from "react";

const  App = () => {

    const [expenses,setExpenses] = useState([]);

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