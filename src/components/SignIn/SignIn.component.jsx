import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { auth } from './../../firebase/firebase.utils';
import { googleSignInStart, emailSignInStart } from './../../redux/user/user.actions';

import FormInput from './../FormInput/FormInput.component';
import Button from './../Button/Button.component';

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

    handleSubmit = async event => {
        event.preventDefault();

        const { signInWithEmailAndPassword } = this.props;
        const {userEmail, userPassword} = this.state;

        signInWithEmailAndPassword(userEmail, userPassword);
 
        // try {
        //     await auth.signInWithEmailAndPassword(userEmail, userPassword);
        //     this.setState({userEmail: '', userPassword: ''});
        // } catch(error) {
        //     console.log(error);
        // }

        // alert("Form Submitted");
    }

    render() {
        const { signInWithGoogle } = this.props;
        return(
            <div className = "SignIn">

                <h1> SignIn here </h1>

                <form onSubmit = {this.handleSubmit}>

                    <FormInput 
                        type = "email"
                        name = "userEmail"
                        id = "userSigninEmail"
                        value = {this.state.userEmail} 
                        handleChange = {this.handleChange} 
                        label = "Email" 
                        placeholder = "Your Email" />

                    <FormInput 
                        type = "password"
                        name = "userPassword"
                        id = "userSigninPassword"
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

const mapDispatchToProps = dispatch => ({
    signInWithGoogle : () => dispatch(googleSignInStart()),
    signInWithEmailAndPassword : (email, password) => dispatch(emailSignInStart({email, password})) 
})

export default connect(null, mapDispatchToProps)(SignIn);