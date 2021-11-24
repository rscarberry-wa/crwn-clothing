import React, { useState } from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import { SignInContainer, SignInTitle, ButtonsContainer } from './sign-in.styles';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {

    const [userCredentials, setUserCredentials] = useState({email: '', password: ''});

    const handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = userCredentials;
        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredentials({...userCredentials, [name]: value});
    }

    const { email, password } = userCredentials;

    // the google button is given type="button", because the 
    // default behavior of a button that's a child of a form is
    // to be type="submit". But we don't want an onSubmit to be
    // triggered on that button.
    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    name="email" 
                    label="Email" 
                    type="email" 
                    value={email} 
                    required 
                    handleChange={handleChange} 
                />
                <FormInput 
                    name="password" 
                    label="Password" 
                    type="password" 
                    value={password} 
                    required 
                    handleChange={handleChange} 
                />
                <ButtonsContainer>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" 
                        onClick={googleSignInStart} 
                        isGoogleSignIn>Sign in with Google
                    </CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);