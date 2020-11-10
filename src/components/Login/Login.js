import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png';

const Login = () => {
    document.title = 'Log in';
    return (
        <section className='d-flex justify-content-center align-items-center flex-column pt-5 mt-5'>
            <div><img src={logo} alt='' width='auto'/></div>
            <div className='formContainer'>
                <form>
                    <input type='email' placeholder='example@email.com' required /> <br />
                    <input type='password' placeholder='password' required /> <br />
                    <button className='btn btn-dark form-btn'>Log in</button>
                    <Link to='/signup' style={{textDecoration:'none'}}>
                        <p>Create an account</p>
                    </Link>
                </form>
            </div>
        </section>
    );
};

export default Login;