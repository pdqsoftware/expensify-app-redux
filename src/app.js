import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'

import { addExpense } from './actions/expenses'
import { sortByAmount, setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css';
import './styles/styles.scss'
import './styles/base/app.css'

const store = configureStore()

console.log(store.getState())

// Add some expenses
store.dispatch(addExpense({ description: 'Water surcharge', amount: 22 }));
store.dispatch(addExpense({ description: 'Water bill', amount: 300 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 550 }));

// Set the sort by amount
store.dispatch(sortByAmount());
console.log(store.getState())

// Set a text filter - 'gas', 'water' or 'bill' - try each in turn
store.dispatch(setTextFilter('bill'))
console.log(store.getState())

setTimeout(() => {
    store.dispatch(setTextFilter('rent'))
    // store.dispatch(sortByAmount());
}, 3000);

// Extract the expenses that match the criteria/order
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses)


const jsx = (
    <Provider  store = { store }>
        <AppRouter />
    </Provider>
)


const appRoot = document.getElementById('app')
ReactDOM.render(jsx, appRoot)
