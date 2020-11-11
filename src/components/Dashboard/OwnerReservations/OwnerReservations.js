import React, { useEffect, useState } from 'react';
import OwnerReservationCard from './OwnerReservationCard';

const OwnerReservations = ({ email }) => {
    const [reserves, setReserves] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/getOwnerReserves', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => setReserves(data));
    }, []);

    const deleteReservation = (id) => {
        const updatedReservations = reserves.filter(reserve => reserve._id !== id);

        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(isDeleted => {
                if (isDeleted) {
                    setReserves(updatedReservations);
                } else {
                    alert('Delete operation failed');
                }
            })
    }

    return (
        <section>
            <div className='row d-flex justify-content-center flex-wrap mw-100 pl-5 pt-4 pb-4'>
                {
                    reserves.length ?
                        reserves.map((reserve) => <OwnerReservationCard reserve={reserve} deleteReservation={deleteReservation} key={reserve._id} />)
                        : <h1>Reservations loading...</h1>
                }
            </div>
        </section>
    );
};

export default OwnerReservations;