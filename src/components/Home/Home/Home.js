import React from 'react';
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
        </div>
    );
};

export default Home;