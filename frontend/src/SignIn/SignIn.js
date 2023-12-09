import React from 'react'
import { Link } from 'react-router-dom';
import './SignIn.css'; 


const SignIn = () => {
    return (
        <div className='login-container'>
            <form className='login-wrapper'>
                <h1>Sign In</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required/>
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required/>
                </div>
                <div className='input-box'>
                    <Link to="/Home">
                        <button type='submit' className='btn-signin'>Register</button>
                    </Link>
                </div>
                <div className='SignUp'>
                    <p className='regis'><Link to={'/SignUp'}>Sign Up</Link></p>
                    <p>Forgot Password?</p>
                </div>
            </form>
        </div>
    )
}

export default SignIn