import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

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
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;
        emailSignInStart(email, password);
    }

    handleChange = event => {
        // Destructure out the value and name of the targeted input
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render () {
        
        const { googleSignInStart } = this.props;

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
                            onClick={googleSignInStart} 
                            isGoogleSignIn>Sign in with Google
                        </CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);