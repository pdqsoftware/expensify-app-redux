import moment from 'moment';
import expensesReducer from '../../reducers/expenses';

// Create some expenses that can be used by all the tests that follow
const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0    // A number for comparison in the sort function
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()  // 4 days before 1970 (as a number)
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()  // 4 days after 1970 (as a number)
}]

// REMOVE_EXPENSE
test('should remove an expense from above list', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '2'
    }
    const result = expensesReducer(expenses, action)
    expect(result).toEqual([
        expenses[0],
        expenses[2]
    ])
})

// ADD_EXPENSE
test('should add a new expense to the array', () => {
    const createdAt = moment(0).add(3, 'days').valueOf() 
    const newExpense = {
        id: '4',
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