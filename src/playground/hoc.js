// Higher Order Component (HOC) - A component (HOC) that renders another component

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: { props.info }</p>
        {/* <p>{ props.isAdmin ? 'true' : 'false' }</p> */}
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p> }
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? (
                 <WrappedComponent {...props} />
            ) : (
                <p>Please log in!</p>
            )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)    // Pass in the Info component
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={ true } info="These are the details" />, document.getElementById("app"))