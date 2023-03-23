import React,{useState} from 'react'
import './ExpenseForm.css'


function ExpenseForm(props) {
   const [enteredTitle,setEnteredTitle] = useState('');
   const [enteredAmount,setEnteredAmount] = useState('');
   const [enteredDate,setEnteredDate] = useState('');



  const titleChangeHandler = (event) =>{
    //   console.log(event.target.value)
    setEnteredTitle(event.target.value);
  }

  const amountChangeHandler = (event) =>{
    // console.log(event.target.value)
    setEnteredAmount(event.target.value)
}

const dateChangeHandler = (event) =>{
    // console.log(event.target.value)
    setEnteredDate(event.target.value)
}

 const submitHandler = (event) =>{
    event.preventDefault();

    const expenseData={
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate),
    };
    // console.log(expenseData)
    props.onSaveExpenseData(expenseData)

    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
};
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
              <label>TITLE</label>
              <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='new-expense__control'>
              <label>Amount</label>
              <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}></input>
            </div>
            <div className='new-expense__control'>
              <label>Date</label>
              <input type='date' value={enteredDate} min='2019-19-01' max='2025-10-10' onChange={dateChangeHandler}></input>
            </div>
            <div className='new-expense__actions'>
              <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default ExpenseForm
