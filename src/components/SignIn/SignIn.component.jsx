import React, { useState } from 'react';
import { connect } from 'react-redux';

// import { auth } from './../../firebase/firebase.utils';
import { googleSignInStart, emailSignInStart } from './../../redux/user/user.actions';

import FormInput from './../FormInput/FormInput.component';
import Button from './../Button/Button.component';

import './SignIn.styles.css';

const SignIn = ({signInWithEmailAndPassword, signInWithGoogle}) => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         userEmail : '',
    //         userPassword : ''
    //     }
    // }

    const [userCredentials, setUserCredentials] = useState({userEmail : '', userPassword : ''});
    const {userEmail, userPassword} = userCredentials;

    const handleChange = event => {
        const {name, value} = event.target;
        // this.setState({
        //     [name] : value
        // })
        setUserCredentials({...userCredentials, [name] : value});
    }

    const handleSubmit = async event => {
        event.preventDefault();

        // const { signInWithEmailAndPassword } = this.props;

        signInWithEmailAndPassword(userEmail, userPassword);
 
        // try {
        //     await auth.signInWithEmailAndPassword(userEmail, userPassword);
        //     this.setState({userEmail: '', userPassword: ''});
        // } catch(error) {
        //     console.log(error);
        // }

        // alert("Form Submitted");
    }

    return(
        <div className = "SignIn">

            <h1> SignIn here </h1>

            <form onSubmit = {handleSubmit}>

                <FormInput 
                    type = "email"
                    name = "userEmail"
                    id = "userSigninEmail"
                    value = {userEmail} 
                    handleChange = {handleChange} 
                    label = "Email" 
                    placeholder = "Your Email" />

                <FormInput 
                    type = "password"
                    name = "userPassword"
                    id = "userSigninPassword"
                    value = {userPassword} 
                    handleChange = {handleChange} 
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


const mapDispatchToProps = dispatch => ({
    signInWithGoogle : () => dispatch(googleSignInStart()),
    signInWithEmailAndPassword : (email, password) => dispatch(emailSignInStart({email, password})) 
})

export default connect(null, mapDispatchToProps)(SignIn);