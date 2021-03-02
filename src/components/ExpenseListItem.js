import React from 'react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'

// In the next line there are no props passed in from the store by connect()
// However, connect() does pass in dispatch() alongside the props passed in by the call - which are destructured from expense
const ExpenseListItem = ({ id, description, amount, createdAt }) => (  
    <div>
        <Link to={`/edit/${id}`}>
            <h4>{ description }</h4>
        </Link>
        <p>${ amount } - { createdAt }</p>
        {/* <button onClick={ () => {
                console.log(id)
                // Remember to enter an object inside the removeExpense() function!
                dispatch(removeExpense({id}))
            }} >Remove</button> */}
    </div>
)

// export default connect()(ExpenseListItem)
export default ExpenseListItem