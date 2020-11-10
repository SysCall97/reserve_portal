import React from 'react';
import logo from '../../../Images/logo.png';

const About = () => {
    return (
        <section className='row mt-5 mw-100 p-4 ml-0 mr-0' id='about'>
            <div className='col-md-4 d-flex justify-content-center align-items-center flex-column pl-5 mb-5 mt-5'>
                <img src={logo} alt='' className='img-fluid p-0' style={{ width: '340px' }} />
            </div>

            <div className='col-md-3 ml-auto pr-5 d-flex justify-content-center align-items-start flex-column text-light'>
                <p>Contact With Us</p>
                <p>Headquarters <br />
                11,Balakrishnapuram First Street, <br />
                Adambakkam, Chennai-600088</p>

                <p>Phone: +91 9962242369 <br />
                Email: info@delicon.org <br />
                Skype: delicon</p>
            </div>

            <div className='col-md-5 ml-auto d-flex justify-content-center align-items-start flex-column text-light'>
                <p className='text-justify'>
                    Delicon was started in a little garage in South Chennai and it's been an exciting journey so far. We strive to stay true to our core beliefs of servicing our Clients providing them a comprehensive package of marketing solutions. We strongly believe every operation in a business contributes to its marketing - enabling us to provide both technical and business solutions to marketing problems.
                </p>
            </div>

        </section>
    );
};

export default About;