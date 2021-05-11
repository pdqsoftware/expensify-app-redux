import moment from 'moment';

// Create an expenses array that can be used by all the tests that require expenses
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

export default expenses;