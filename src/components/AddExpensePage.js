import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'

const AddExpensePage = (props) => (
    <div>
        <h3>Add Expense</h3>
        <ExpenseForm 
            onSubmit={(expense) => {
                console.log(expense)
                props.dispatch(addExpense(expense))
                props.history.push('/')
            }}
        />
    </div>
)

export default connect()(AddExpensePage)