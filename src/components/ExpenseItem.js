import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
// import Card from './Card'

function ExpenseItem(props) {
  //  const [title,setTitle] = useState(props.title);

    // const eventHandler=()=>{
    //    setTitle('updated')
    // }
  
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount} rs</div>
      </div>
      {/* <button onClick={eventHandler}>change</button> */}
    </div>
  )
}

export default ExpenseItem
