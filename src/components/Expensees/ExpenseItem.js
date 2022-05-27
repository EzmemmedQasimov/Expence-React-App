import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
const eventHandler = () => {
    console.log('Clicked!!!')
}
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={eventHandler}>Click me</button>
        </div>
    );
}
export default ExpenseItem