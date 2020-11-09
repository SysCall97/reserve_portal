import React from 'react';
import logo from '../../../Images/logo22.png';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg  pt-4' id='navbar' style={{ background: 'rgb(245, 245, 247)', opacity: '0.9' }}>
            <img src={logo} alt='' className='img-fluid p-0' style={{ width: '8%' }}  />
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item ml-4'>
                        <a className='nav-link' href='#home'>Home <span className='sr-only'>(current)</span></a>
                    </li>
                    <li className='nav-item ml-4'>
                        <a className='nav-link' href='#projects'>Reservations</a>
                    </li>
                    <li className='nav-item ml-4'>
                        <a className='nav-link' href='#blogs'>Client Review</a>
                    </li>
                    <li className='nav-item ml-4'>
                        <a className='nav-link' href='#about'>About Us</a>
                    </li>
                    <li className='nav-item ml-4'>
                        <button type='button' className='btn btn-dark mt-1 mb-1' style={{ color: '#fff' }}>Log in</button>
                    </li>
                    <li className='nav-item ml-4'>
                        <button type='button' className='btn btn-dark mt-1 mb-1' style={{ color: '#fff' }}>Sign up</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;