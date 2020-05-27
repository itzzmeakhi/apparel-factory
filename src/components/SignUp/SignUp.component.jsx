import React, { Component } from 'react';

import './SignUp.styles.css';

import { auth, createUserProfileDocument } from './../../firebase/firebase.utils';

import FormInput from './../FormInput/FormInput.component';
import Button from './../Button/Button.component';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName : '',
            userEmail : '',
            userPassword : '',
            confirmPassword : ''
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
    }

    handleSubmit = async event => {
        event.preventDefault();

        console.log("FORM SUBMITTED");

        const { userName, userEmail, userPassword, confirmPassword } = this.state;

        if(userPassword !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(userEmail, userPassword);
 
            await createUserProfileDocument({
                'displayName' : userName,
                'uid' : user.uid,
                'email' : userEmail
            });
            //createUserProfileDocument({user.})
            this.setState({userName: '', userEmail: '', userPassword: '', confirmPassword: ''});

        } catch(error) {
            console.log("An error occurred!"+error);
        }
    }

    render() {
        return(
            <div className = "SignUp">

                <h1> Signup here..! </h1>

                <form onSubmit = {this.handleSubmit}>

                    <FormInput 
                        type = "text"
                        name = "userName"
                        id = "userName"
                        value = {this.state.userName} 
                        handleChange = {this.handleChange} 
                        label = "Username" 
                        placeholder = "Your name" />

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

                    <FormInput 
                        type = "password"
                        name = "confirmPassword"
                        id = "confirmPassword"
                        value = {this.state.confirmPassword} 
                        handleChange = {this.handleChange} 
                        label = "Confirm Password" 
                        placeholder = "Password" />

                    <div className = "ButtonsContainer">
                        
                        <Button type = "submit"> REGISTER </Button>

                        <Button type = "button"> CLEAR </Button>

                    </div>

                </form>

            </div>
        )
    }
}

export default SignUp; 