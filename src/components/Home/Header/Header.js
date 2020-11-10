import React from 'react';
import illustrator from '../../../Images/illustrator.jpg';

const Header = () => {
    return (
        <section className='row mt-5 mb-5 mw-100 pt-4 pl-4 pr-4 ml-0 mr-0' id='header'>
            <div className='text-dark col-md-4 d-flex justify-content-center align-items-center flex-column pl-5'>
                <h1>Best Restaurents are waiting for you</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
            </div>
            <div className='col-md-7 ml-auto'>
                <img src={illustrator} alt='' width='100%' height='auto' className='img-fluid' />
            </div>
        </section>
    );
};

export default Header;