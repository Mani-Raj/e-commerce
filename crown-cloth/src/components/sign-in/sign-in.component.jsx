import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-botton.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
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
                    <FormInput name="email" value={this.state.email} 
                    handleChange={this.handleChange}
                    type='email' label='Email' required />
                    <FormInput name='password' 
                    handleChange={this.handleChange}
                    value={this.state.password} label='Password' type='password' required />
                    <div className='buttons'>

                        <CustomButton type='submit'> SIGN IN </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> {' '}  Sign in with google {' '}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;