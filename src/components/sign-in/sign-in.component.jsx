import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import { SignInContainer, SignInTitle, ButtonsContainer } from './sign-in.styles';

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        // Destructure out the value and name of the targeted input
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render () {
        // the google button is given type="button", because the 
        // default behavior of a button that's a child of a form is
        // to be type="submit". But we don't want an onSubmit to be
        // triggered on that button.
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        label="Email" 
                        type="email" 
                        value={this.state.email} 
                        required 
                        handleChange={this.handleChange} />
                    <FormInput 
                        name="password" 
                        label="Password" 
                        type="password" 
                        value={this.state.password} 
                        required 
                        handleChange={this.handleChange} />
                    <ButtonsContainer>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" 
                            onClick={signInWithGoogle} 
                            isGoogleSignIn>Sign in with Google
                        </CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;