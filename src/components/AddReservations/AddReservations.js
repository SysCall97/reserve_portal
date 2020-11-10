import React, { useState } from 'react';

const AddReservations = () => {
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
        
        fetch('http://localhost:5000/addReserves', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(isInserted => {
            if(isInserted) alert("Inserted successfully");
        })
        e.preventDefault();
    }

    return (
        <div>
            <form>
                <input type='text' placeholder='Restaurent Name' onChange={(e) => setResName(e.target.value)} /> <br />
                <input type='date' placeholder='From date' onChange={(e) => setFromDate(e.target.value)} /> <br />
                <input type='date' placeholder='To date' onChange={(e) => setToDate(e.target.value)} /> <br />
                <textarea placeholder='Details' onChange={(e) => setDetails(e.target.value)}></textarea> <br />
                <input type='file' onChange={(e) => setImage(e.target.files[0])} />
                <input type='submit' onClick={submit} />
            </form>
        </div>
    );
};

export default AddReservations;