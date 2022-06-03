import './ExpenseForm.css'
import {useState} from "react";
const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    }
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    }
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onSaveExpenseData(expenseData);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input value={enteredTitle} type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input value={enteredAmount} type="number" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input value={enteredDate} type="date" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={props.onCancel} type="button">Cancel</button>
                <button type="submit">Add expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm