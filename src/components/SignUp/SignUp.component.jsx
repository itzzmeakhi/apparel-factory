import React, { useState } from 'react';
import { connect } from 'react-redux';

import './SignUp.styles.css';

// import { auth, createUserProfileDocument } from './../../firebase/firebase.utils';

import FormInput from './../FormInput/FormInput.component';
import Button from './../Button/Button.component';
import { signUpStart } from './../../redux/user/user.actions';

const SignUp = ({signUpStart}) =>  {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         userName : '',
    //         userEmail : '',
    //         userPassword : '',
    //         confirmPassword : ''
    //     }
    // }

    const [userCredentials, setUserCredentials] = useState({
        userName : '',
        userEmail : '',
        userPassword : '',
        confirmPassword : ''
    });
    const { userName, userEmail, userPassword, confirmPassword } = userCredentials;

    const handleChange = event => {
        const {name, value} = event.target;
        // this.setState({
        //     [name] : value
        // })
        setUserCredentials({...userCredentials, [name] : value});
    }

    const handleSubmit = async event => {
        event.preventDefault();

        // console.log("FORM SUBMITTED");

        // const { signUpStart } = this.props;
        // const { userName, userEmail, userPassword, confirmPassword } = this.state;

        if(userPassword !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        signUpStart({userName, userEmail, userPassword});

        

        // try {
        //     const {user} = await auth.createUserWithEmailAndPassword(userEmail, userPassword);
 
        //     await createUserProfileDocument({
        //         'displayName' : userName,
        //         'uid' : user.uid,
        //         'email' : userEmail
        //     });
        //     //createUserProfileDocument({user.})
        //     this.setState({userName: '', userEmail: '', userPassword: '', confirmPassword: ''});

        // } catch(error) {
        //     console.log("An error occurred!"+error);
        // }
    }

    return(
        <div className = "SignUp">

            <h1> Signup here..! </h1>

            <form onSubmit = {handleSubmit}>

                <FormInput 
                    type = "text"
                    name = "userName"
                    id = "userName"
                    value = {userName} 
                    handleChange = {handleChange} 
                    label = "Username" 
                    placeholder = "Your name" />

                <FormInput 
                    type = "email"
                    name = "userEmail"
                    id = "userEmail"
                    value = {userEmail} 
                    handleChange = {handleChange} 
                    label = "Email" 
                    placeholder = "Your Email" />

                <FormInput 
                    type = "password"
                    name = "userPassword"
                    id = "userPassword"
                    value = {userPassword} 
                    handleChange = {handleChange} 
                    label = "Password" 
                    placeholder = "Your Password" />

                <FormInput 
                    type = "password"
                    name = "confirmPassword"
                    id = "confirmPassword"
                    value = {confirmPassword} 
                    handleChange = {handleChange} 
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


const mapDispatchToProps = dispatch => {
    return {
        signUpStart : userCredentials => dispatch(signUpStart(userCredentials))
    }
}

export default connect(null, mapDispatchToProps)(SignUp); 