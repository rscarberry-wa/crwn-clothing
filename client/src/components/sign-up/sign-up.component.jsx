import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

import { signUpStart } from '../../redux/user/user.actions';

const SignUp = () => {

    const [userSignUpInfo, setUserSignUpInfo] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const dispatch = useDispatch();

    const { displayName, email, password, confirmPassword } = userSignUpInfo;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        dispatch(signUpStart({
            displayName, email, password
        }));
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setUserSignUpInfo({
            ...userSignUpInfo,
            [name]: value
        });
    }

    return (
        <SignUpContainer>
            <SignUpTitle>I do not have an account</SignUpTitle>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                    type='text' 
                    name='displayName' 
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required />
                <FormInput 
                    type='email' 
                    name='email' 
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required />
                <FormInput 
                    type='password' 
                    name='password' 
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required />
                <FormInput 
                    type='password' 
                    name='confirmPassword' 
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    )
}

export default SignUp;