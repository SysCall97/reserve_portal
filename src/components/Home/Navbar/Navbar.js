import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp, signOut } from '../../../authInManager/authentication';
import logo from '../../../Images/logo.png';

const Navbar = () => {
    initializeApp();

    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    const handleLogOut = (e) => {
        signOut();
        setUser({})
        sessionStorage.setItem('user', JSON.stringify({}));
    }

    return (
        <nav className='navbar navbar-expand-lg  pt-4' id='navbar' style={{ background: 'rgb(245, 245, 247)', opacity: '0.9' }}>
            <img src={logo} alt='' className='img-fluid p-0' style={{ width: '140px' }} />
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item ml-4'>
                        <a className='nav-link' href='#header'>Home <span className='sr-only'>(current)</span></a>
                    </li>
                    <li className='nav-item ml-4'>
                        <a className='nav-link' href='#reservations'>Reservations</a>
                    </li>
                    <li className='nav-item ml-4'>
                        <a className='nav-link' href='#reviews'>Client Review</a>
                    </li>
                    <li className='nav-item ml-4'>
                        <a className='nav-link' href='#about'>About Us</a>
                    </li>

                    {
                        user.loggedIn ?
                            <>
                                <Link className='nav-item ml-4' style={{textDecoration: 'none'}} to='/dashboard'>
                                    <a className='nav-link'>Dashboard</a>
                                </Link>

                                <Link className='nav-item ml-4' to='/'>
                                    <button type='button' className='btn btn-dark mt-1 mb-1' style={{ color: '#fff' }} onClick={handleLogOut}>Log out</button>
                                </Link>
                            </>
                            :
                            <>
                                <Link className='nav-item ml-4' to='/login'>
                                    <button type='button' className='btn btn-dark mt-1 mb-1' style={{ color: '#fff' }}>Log in</button>
                                </Link>

                                <Link className='nav-item ml-4' to='/signup'>
                                    <button type='button' className='btn btn-dark mt-1 mb-1' style={{ color: '#fff' }}>Sign up</button>
                                </Link>
                            </>
                    }

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;