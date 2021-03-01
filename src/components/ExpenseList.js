import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'

import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (   // These are now the props from the store
    <div>
        <h2>Expense List</h2>
        {/* {props.filters.text} */}
        {/* {props.expenses.length} */}
        { props.expenses.map((expense) => {
            return (
                <ExpenseListItem key={expense.id} { ...expense } />
            )
        })}
    </div>
)

const mapStateToProps = (state) => {
    return {
        // expenses: state.expenses,
        // filters: state.filters
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)
// export default ExpenseList