import React,{useState}from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
// import Card from './Card'
import Expensesfilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'


function Expenses(props) {
  const [filteredYear,setFilteredYear]=useState('2020')

  const filterchangeHandler=(selectedYear)=>{
    // console.log('Expenses se kr re')
    // console.log(selectedYear)
    setFilteredYear(selectedYear)
  }

   const filterExpenses = props.items.filter(expense=>
    {
      return expense.date.getFullYear().toString() === filteredYear;
    })


      let expenseContant = <p><h1>No Expense Found</h1></p>
      if(filterExpenses.length > 0){
        expenseContant = filterExpenses.map((expense)=>
        <ExpenseItem 
        key = {expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        ></ExpenseItem>
      )}

  return (
    <div>
    <div className="expenses">
      <Expensesfilter selected={filteredYear} onChangeFilter={filterchangeHandler}></Expensesfilter>

      <ExpensesChart expenses={filterExpenses}></ExpensesChart>
          
          {expenseContant}
      {/* {props.items.map((expense)=> */}

      {/* { filterExpenses.length === 0 ? (<p>No Expense Found!</p>):(
         filterExpenses.map((expense)=>                               
          <ExpenseItem                                            
          key = {expense.id}
          title={expense.title}                       // using ternary operator filtering 
          amount={expense.amount}
          date={expense.date}
          ></ExpenseItem>
        )
      )} */}

      {/* {filterExpenses.map((expense)=>
        <ExpenseItem 
        key = {expense.id}
        title={expense.title}
        amount={expense.amount}               //map method to print component 
        date={expense.date}
        ></ExpenseItem>
      )} */}





        {/* <ExpenseItem 
      title={props.items[0].title}
      amount={props.items[0].amount}
      date={props.items[0].date}></ExpenseItem>
      <ExpenseItem
      title={props.items[1].title}
      amount={props.items[1].amount}
      date={props.items[1].date}></ExpenseItem>
      <ExpenseItem
      title={props.items[2].title}
      amount={props.items[2].amount}
      date={props.items[2].date}></ExpenseItem>
      <ExpenseItem
      title={props.items[3].title}
      amount={props.items[3].amount}
      date={props.items[3].date}></ExpenseItem> */}
      



    </div>
    </div>
  )
}

export default Expenses
