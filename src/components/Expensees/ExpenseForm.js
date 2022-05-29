import './ExpenseForm.css'
import {useState} from "react";
const ExpenseForm = () => {
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    const titleChangeHandler = (e) => {
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value
        // });
        // setUserInput((prevState) =>{
        //     return {...prevState, enteredTitle: e.target.value};
        // })
        setEnteredTitle(e.target.value);
    }
    const amountChangeHandler = (e) => {
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value
        // });
        // setUserInput((prevState) =>{
        //     return {...prevState, enteredTitle: e.target.value};
        // })
        setEnteredAmount(e.target.value);
    }
    const dateChangeHandler = (e) => {
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value
        // });
        // setUserInput((prevState) =>{
        //     return {...prevState, enteredTitle: e.target.value};
        // })
        setEnteredDate(e.target.value);
    }
    // const [userInput,setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date:enteredDate,
        }
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        // console.log(expenseData)
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
                <button type="submit">Add new expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm