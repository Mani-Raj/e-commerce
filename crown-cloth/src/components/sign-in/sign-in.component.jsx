import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-botton.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import { auth } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state; 

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '', password:''
            });
        } catch(error) {
            console.log(error);
        }
    }

    handleChange =event => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        })
    }

    render () {
        return (
            <div className="sign-in">
                <h2 className='title'> I already have account</h2>
                <span>sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        type='email'
                        label='Email'
                        required
                    />
                    <FormInput
                        name='password' 
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label='Password'
                        type='password'
                        required
                    />
                    <div className='buttons'>

                        <CustomButton type='submit'> SIGN IN </CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn> {' '}  Sign in with google {' '}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;