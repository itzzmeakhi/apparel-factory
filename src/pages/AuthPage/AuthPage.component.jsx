import React from 'react';

import SignIn from './../../components/SignIn/SignIn.component';

const AuthPage = (props) => {
    return(
        <div className = "AuthContainer">
            <h1> Auth Page </h1>
            <SignIn />
        </div>
    )
}

export default AuthPage;