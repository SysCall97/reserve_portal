import React, { useEffect, useState } from 'react';
import ReservationCard from './ReservationCard';

const Reservations = () => {
    const [reserves, setReserves] = useState([]);

    useEffect(() => {
        fetch('https://polar-eyrie-41428.herokuapp.com/getAllReserves')
            .then(res => res.json())
            .then(data => setReserves(data));
    }, []);


    return (
        <section id='reservations'>
            <section className='mt-5 mb-5 mw-100'>
                <div data-aos="fade-up" className='text-center caption'>Reservations</div>
                <div data-aos="fade-down" className='row d-flex justify-content-center flex-wrap mw-100 pl-5 pt-4 pb-4'>
                    {
                        reserves.length?
                        reserves.map((reserve) => <ReservationCard reserve={reserve} key={reserve._id} />)
                        : <h1>Reservations loading...</h1>
                    }
                </div>
            </section>
        </section>
    );
};

export default Reservations;