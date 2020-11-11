import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { initializeApp, signInUserWithEmailAndPassword } from '../../authInManager/authentication';
import logo from '../../Images/logo.png';

const Login = () => {
    document.title = 'Log in';
    initializeApp();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const handleLogIn = (e) => {
        const user = { email, password };
        signInUserWithEmailAndPassword(user)
            .then(res => {
                sessionStorage.setItem('user', JSON.stringify(res));
                if(res.loggedIn) history.replace(from);
                else alert(res.error);
            });
        e.preventDefault();
    }

    return (
        <section className='d-flex justify-content-center align-items-center flex-column pt-5 mt-5'>
            <div><img src={logo} alt='' width='auto' /></div>
            <div className='formContainer'>
                <form>
                    <input type='email' placeholder='example@email.com' onChange={(e) => setEmail(e.target.value)} required /> <br />
                    <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} required /> <br />
                    <button className='btn btn-dark form-btn' onClick={handleLogIn}>Log in</button>
                    <Link to='/signup' style={{ textDecoration: 'none' }}>
                        <p className='pt-2'>Create an account</p>
                    </Link>
                </form>
            </div>
        </section>
    );
};

export default Login;