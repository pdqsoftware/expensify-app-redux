import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'

// In the next line there are no props passed in from the store by connect()
// However, connect() does pass in dispatch() alongside the props passed in by the call - which are destructured from expense
const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (  
    <div>
        <h4>{ description }</h4>
        <p>${ amount } - { createdAt }</p>
        <button onClick={ () => {
                console.log(id)
                // Remember to enter an object inside the removeExpense() function!
                dispatch(removeExpense({id}))
            }} >Remove</button>
    </div>
)

export default connect()(ExpenseListItem)