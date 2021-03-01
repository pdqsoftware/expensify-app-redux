import React from 'react'
import { connect } from 'react-redux'

const ExpenseList = (props) => (   // These are now the props from the store
    <div>
        <h2>Expense List</h2>
        {props.filters.text}
        {props.expenses.length}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseList)
// export default ExpenseList