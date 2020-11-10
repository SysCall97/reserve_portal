import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png';

const SignUp = () => {
    document.title = 'Sign Up';
    return (
        <section className='d-flex justify-content-center align-items-center flex-column pt-5 mt-5'>
            <div><img src={logo} alt='' width='auto' /></div>
            <div className='formContainer'>
                <form>
                    <input type='text' placeholder='Username' required /> <br />
                    <input type='email' placeholder='example@email.com' required /> <br />
                    <input type='password' placeholder='Password' required /> <br />
                    <input type='password' placeholder='Confirm Password' required /> <br />
                    <button className='btn btn-dark form-btn'>Sign Up</button>
                    <Link to='/login' style={{ textDecoration: 'none' }}>
                        <p>Already have an account?</p>
                    </Link>
                </form>
            </div>
        </section>
    );
};

export default SignUp;