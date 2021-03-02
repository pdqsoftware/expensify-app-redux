import React from 'react'
import moment from 'moment'
import { SingleDatePicker, SingleDatePickerWrapper } from 'react-dates'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'

// const date = new Date()
const now = moment().format("DD/MM/YYYY")
console.log(now)

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error:''
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if (amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }
    onDateChange = (createdAt) => {  //  This is an instance of a moment
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }
    onSubmit = (e) => {
        e.preventDefault()
        if (!this.state.description || !this.state.amount) {
            // Set error state
            this.setState(() => ({ error: 'Please provide description and amount.' }))
        } else {
            // Clear the error
            this.setState(() => ({ error: '' }))
            console.log('Submitted')
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,   // Converts to a float then removes the decimal
                createdAt: this.state.createdAt.valueOf(),   // Returns a number in milliseconds
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div>
                { this.state.error && <p>{ this.state.error }</p> }
                <form onSubmit={ this.onSubmit }>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={ this.state.description }
                        onChange={ this.onDescriptionChange }
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={ this.state.amount }
                        onChange={ this.onAmountChange }
                    />
                    {/* <SingleDatePickerWrapper /> */}
                    <SingleDatePicker
                        date={ this.state.createdAt }
                        onDateChange={ this.onDateChange }
                        focused={ this.state.calendarFocused}
                        onFocusChange={ this.onFocusChange }
                        id='1234'
                        numberOfMonths={ 1 }
                        isOutsideRange={() => false }
                    />
                    <textarea 
                        placeholder="Add a note for your expense (optional)"
                        value={ this.state.note }
                        onChange={ this.onNoteChange }
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}