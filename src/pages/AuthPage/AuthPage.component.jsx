import React from 'react';

import './AuthPage.styles.css';

import SignIn from './../../components/SignIn/SignIn.component';
import SignUp from './../../components/SignUp/SignUp.component';

const AuthPage = (props) => {
    return(
        <div className = "AuthContainer">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default AuthPage;