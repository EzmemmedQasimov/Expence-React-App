import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHndler = (selectedYear) => {
        // console.log(selectedYear, 'expenses.js');
        setFilteredYear(selectedYear);
    }
    return(
        <Card className="expenses">
            <ExpensesFilter selected ={filteredYear} onChangeFilter = {filterChangeHndler}/>
            <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date}/>
            <ExpenseItem title={props.item[1].title} amount={props.item[1].amount} date={props.item[1].date}/>
            <ExpenseItem title={props.item[2].title} amount={props.item[2].amount} date={props.item[2].date}/>
            <ExpenseItem title={props.item[3].title} amount={props.item[3].amount} date={props.item[3].date}/>
        </Card>
    )
}
export default Expenses