import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Reservations from '../Reservations/Reservations';

const Home = () => {
    document.title = 'Home'
    return (
        <div id='home'>
            <Navbar />
            <Header />
            <Reservations />
            <CustomerReview />
        </div>
    );
};

export default Home;