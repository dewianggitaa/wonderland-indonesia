import React from 'react'
import './SignUp.css';
import bg from '../assets/bg.png'
import { Link } from 'react-router-dom';



function SignUp() {
    return (
        <div className='SU__wrapper' style={{backgroundImage: `url(${bg})`}}>
            <form className='wrapper'>
                <h1>Sign Up</h1>
                <div className='input-box'>
                    <input type='text' placeholder='Username' required/>
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required/>
                </div>
                <Link to="/Home">
                    <button type='submit' className='btn-signup'>Register</button>
                </Link>
                <div className='SignIn'>
                    <p>Already have an account?</p>
                    <p className='login'><Link to={'/SignIn'}>Sign In</Link> </p>
                </div>
            </form>
        </div>
    );
}

export default SignUp