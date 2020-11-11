import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, initializeApp } from '../../authInManager/authentication';
import logo from '../../Images/logo.png';

const SignUp = () => {
    document.title = 'Sign Up';
    initializeApp();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const handleSignIn = (e) => {
        if (password !== confirmPassword) {
            alert('Password and comfirmed password must be equal');
        } else {
            const user = { name, email, password };
            createUserWithEmailAndPassword(user)
            .then(res => {
                sessionStorage.setItem('user', JSON.stringify(res));
                if(res.loggedIn) history.replace(from);
                else alert(res.error);
            })
            // .catch((error) => console.log(error));
        }
        e.preventDefault();
    }

    return (
        <section className='d-flex justify-content-center align-items-center flex-column pt-5 mt-5'>
            <div><img src={logo} alt='' width='auto' /></div>
            <div className='formContainer'>
                <form>
                    <input type='text' placeholder='Username' onChange={(e) => setName(e.target.value)} required /> <br />
                    <input type='email' placeholder='example@email.com' onChange={(e) => setEmail(e.target.value)} required /> <br />
                    <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} required /> <br />
                    <input type='password' placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} required /> <br />
                    <button className='btn btn-dark form-btn' onClick={handleSignIn}>Sign Up</button>
                    <Link to='/login' style={{ textDecoration: 'none' }}>
                        <p className='pt-2'>Already have an account?</p>
                    </Link>
                </form>
            </div>
        </section>
    );
};

export default SignUp;