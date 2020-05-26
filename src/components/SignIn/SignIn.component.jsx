import React, { Component } from 'react';

import FormInput from './../FormInput/FormInput.component';
import Button from './../Button/Button.component';
import {signInWithGoogle} from './../../firebase/firebase.utils';

import './SignIn.styles.css';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail : '',
            userPassword : ''
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        alert("Form Submitted");
    }

    render() {
        return(
            <div className = "SignIn">

                <h1> SignIn here </h1>

                <form onSubmit = {this.handleSubmit}>

                    <FormInput 
                        type = "email"
                        name = "userEmail"
                        id = "userEmail"
                        value = {this.state.userEmail} 
                        handleChange = {this.handleChange} 
                        label = "Email" 
                        placeholder = "Your Email" />

                    <FormInput 
                        type = "password"
                        name = "userPassword"
                        id = "userPassword"
                        value = {this.state.userPassword} 
                        handleChange = {this.handleChange} 
                        label = "Password"
                        placeholder = "Your Password" />

                    <div className = "ButtonsContainer">

                        <Button type = "submit"> LOGIN </Button>

                        <Button type = "button" onClick = {signInWithGoogle}>Sign in with Google</Button>

                    </div>

                </form>

            </div>
        )
    }
}

export default SignIn;