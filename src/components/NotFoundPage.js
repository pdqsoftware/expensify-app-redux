import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
    <div className="is-active">
        404 - <Link to="/">Go to home page</Link>
    </div>
)

export default NotFoundPage