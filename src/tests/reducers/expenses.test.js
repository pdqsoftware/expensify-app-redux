import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

// Check default state set correctly
test('should setup default reducer values', () => {
    const result = expensesReducer(undefined, { type: '@@INIT' })
    expect(result).toEqual([])
})

// REMOVE_EXPENSE
test('should remove an expense, by id, from the expenses array', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const result = expensesReducer(expenses, action)
    expect(result).toEqual([
        expenses[0],
        expenses[2]
    ])
})

test('should not remove a non-existent expense from the expenses array', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '999'
    }
    const result = expensesReducer(expenses, action)
    expect(result).toEqual(
        expenses
    )    // I initially used [ ...expenses ], which also worked
})


// ADD_EXPENSE
test('should add a new expense to the expenses array', () => {
    const createdAt = moment(0).add(3, 'days').valueOf() 
    const newExpense = {
        id: '100',
        description: 'Mobile phone',
        note: 'Monthly mobile bill',
        amount: 2799,
        createdAt
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    }
    const result = expensesReducer(expenses, action);
    expect(result).toEqual([
        ...expenses,
        newExpense
    ])
})

// EDIT_EXPENSE
const createdAt = moment(0).subtract(10, 'days').valueOf()
test('should amend values in existing expense', () => {
    const amount = 220
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: { amount }
    }
    const result = expensesReducer(expenses, action)
    expect(result[0].amount).toBe(amount)   // result is an array of expense objects
})

test('should not edit a non-existent expense', () => {
    const amount = 220
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: { amount }
    }
    const result = expensesReducer(expenses, action)
    expect(result).toEqual(expenses)    // result is the expenses array we put in as nothing should have changed
})