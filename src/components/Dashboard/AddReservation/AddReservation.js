import React, { useState } from 'react';

const AddReservation = ({ email, setIsAllReserve }) => {
    const [resName, setResName] = useState('');
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [details, setDetails] = useState('');
    const [image, setImage] = useState(null);

    const submit = (e) => {
        if (fromDate > toDate) {
            alert('Numbers of days are not valid')
        }

        const formData = new FormData();
        formData.append('resName', resName);
        formData.append('fromDate', fromDate);
        formData.append('toDate', toDate);
        formData.append('details', details);
        formData.append('file', image);
        formData.append('email', email);

        fetch('http://localhost:5000/addReserves', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(isInserted => {
                if (isInserted) alert("Inserted successfully");
                setIsAllReserve(true);
            })
        e.preventDefault();
    }
    return (
        <section className='d-flex justify-content-center'>
            <div className='formContainer'>
                <form>
                    <input type='text' placeholder='Restaurent Name' onChange={(e) => setResName(e.target.value)} required/> <br />
                    <input type='date' placeholder='From date' onChange={(e) => setFromDate(e.target.value)} required/> <br />
                    <input type='date' placeholder='To date' onChange={(e) => setToDate(e.target.value)} required/> <br />
                    <textarea placeholder='Details' onChange={(e) => setDetails(e.target.value)}></textarea> <br />
                    <input type='file' onChange={(e) => setImage(e.target.files[0])} required/>
                    <button className='btn btn-dark form-btn' onClick={submit}>Add New Reservation</button>
                </form>
            </div>
        </section>
    );
};

export default AddReservation;