import React, { useEffect, useState } from 'react';
import Update from '../Update/Update';
import OwnerReservationCard from './OwnerReservationCard';

const OwnerReservations = ({ email }) => {
    const [reserves, setReserves] = useState([]);
    const [willUpdate, setWillUpdate] = useState(false);
    const [updateReserve, setUpdateReserve] = useState({});

    useEffect(() => {
        fetch('https://polar-eyrie-41428.herokuapp.com/getOwnerReserves', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => setReserves(data));
    }, [willUpdate]);

    const deleteReservation = (id) => {
        const updatedReservations = reserves.filter(reserve => reserve._id !== id);

        fetch(`https://polar-eyrie-41428.herokuapp.com/delete/${id}`, {
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

    const initUpdateProcess = (id) => {
        setWillUpdate(true);
        // setUpdateId(id);
        const updateReserve = reserves.find(reserve => reserve._id === id);
        setUpdateReserve(updateReserve);
    }

    return (
        <section>
            <div className='row mw-100 pl-5 pt-1 pb-4'>
                {
                    willUpdate ? <Update updateReserve={updateReserve} setWillUpdate={setWillUpdate} /> :
                        reserves.length ?
                            reserves.map((reserve) => <OwnerReservationCard
                                reserve={reserve}
                                deleteReservation={deleteReservation}
                                initUpdateProcess={initUpdateProcess}
                                key={reserve._id}
                            />
                            )
                            : <h1>Reservations loading...</h1>
                }
            </div>
        </section>
    );
};

export default OwnerReservations;