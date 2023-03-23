import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {
    const [isEditing,setisEditing] = useState(false);


  const saveExpenseDataHandler =(enteredExpenseData)=>{
      const expenseData = {
        ...enteredExpenseData,
        id:Math.random().toString()
      }
    //   console.log(expenseData)
    props.onAddExpense(expenseData)
  }

  const startEditingHandler = () => {
    setisEditing(true)
  };

  const stopEditingHandler = () => {
    setisEditing(false)
  };

  return (
    <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
     {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}></ExpenseForm>}
    </div>
  )
}

export default NewExpense
