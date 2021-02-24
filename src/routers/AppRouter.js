import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'
import HelpPage from '../components/HelpPage'
import EditExpensePage from '../components/EditExpensePage'
import AddExpensePage from '../components/AddExpensePage'
import Dashboard from '../components/Dashboard'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component = { Dashboard } exact = { true } />
                <Route path="/create" component = { AddExpensePage } />
                <Route path="/edit/:id" component = { EditExpensePage } />
                <Route path="/help" component = { HelpPage } />
                <Route component = { NotFoundPage } />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter