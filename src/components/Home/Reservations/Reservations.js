import React, { useEffect, useState } from 'react';
import ReservationCard from './ReservationCard';

const Reservations = () => {
    const [reserves, setReserves] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getAllReserves')
            .then(res => res.json())
            .then(data => setReserves(data));
    }, []);

    console.log(reserves);

    return (
        <section id='reservations'>
            <section className='mt-5 mb-5 mw-100'>
                <div className='text-center caption'>Reservations</div>
                <div className='row d-flex justify-content-center flex-wrap mw-100 pl-5 pt-4 pb-4'>
                    {
                        reserves.length &&
                        reserves.map((reserve) => <ReservationCard reserve={reserve} key={reserve._id} />)
                    }
                </div>
            </section>
        </section>
    );
};

export default Reservations;