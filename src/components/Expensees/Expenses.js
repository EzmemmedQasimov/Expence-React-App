import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = props.item.filter((expense) => {
        return  expense.date.getFullYear().toString() === filteredYear;
    });
    let expenseContent = <p>No expense found.</p>;
    if(filteredExpenses.length > 0)
        {
            expenseContent = filteredExpenses.map((expense) => <ExpenseItem key={expense.id} title={expense.title}
                                                           amount={expense.amount} date={expense.date}/>);
        }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesList item={filteredExpenses}/>
        </Card>
    );
}
export default Expenses