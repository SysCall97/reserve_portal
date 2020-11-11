import React, { useState } from 'react';

const Update = (props) => {
    const { _id, resName, toDate, fromDate, details, image } = props.updateReserve;
    const [newResName, setNewResName] = useState(resName);
    const [newToDate, setNewToDate] = useState(toDate);
    const [newFromDate, setNewFromDate] = useState(fromDate);
    const [newDeails, setNewDetails] = useState(details);


    const handleUpdate = (e) => {
        const reservation = {
            resName: newResName,
            fromDate: newFromDate,
            toDate: newToDate,
            details: newDeails
        }


        fetch(`http://localhost:5000/update/${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reservation)
        })
            .then(res => res.json())
            .then(isUpdated => {
                if (isUpdated) {
                    alert('Update Successful');
                    props.setWillUpdate(false);
                }
            })

        e.preventDefault();
    }

    return (
        <section className='d-flex justify-content-start'>
            <div className='formContainer'>
                <form>
                    <img className='card-img-top img-fluid' src={`data:image/png;base64,${image.img}`} alt='' />
                    <input type='text' placeholder='Restaurent Name' defaultValue={newResName} onChange={(e) => setNewResName(e.target.value)} /> <br />
                    <input type='date' placeholder='From date' defaultValue={newFromDate} onChange={(e) => setNewFromDate(e.target.value)} /> <br />
                    <input type='date' placeholder='To date' defaultValue={newToDate} onChange={(e) => setNewToDate(e.target.value)} /> <br />
                    <textarea placeholder='Details' defaultValue={newDeails} onChange={(e) => setNewDetails(e.target.value)}></textarea> <br />
                    <button className='btn btn-primary form-btn' onClick={handleUpdate}>Update</button>
                </form>
            </div>
        </section>
    );
};

export default Update;