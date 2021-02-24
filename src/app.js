import React from 'react'
import ReactDOM from 'react-dom'

import AppRouter from './routers/AppRouter'

import 'normalize.css/normalize.css';
import './styles/styles.scss'
import './styles/base/app.css'

const appRoot = document.getElementById('app')
ReactDOM.render(<AppRouter />, appRoot)
