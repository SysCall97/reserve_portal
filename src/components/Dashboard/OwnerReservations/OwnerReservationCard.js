import React from 'react';

const OwnerReservationCard = (props) => {
    const { _id, resName, toDate, fromDate, details, image } = props.reserve;
    return (
        <div className='card mr-1 mt-4 col-xs-12 col-md-3' style={{ borderRadius: '6px', border: 'none' }}>
            <div className='d-flex justify-content-center mt-4' style={{ height: '200px' }}>
                <img className='card-img-top img-fluid' src={`data:image/png;base64,${image.img}`} alt='' />
            </div>

            <div className='card-body text-left'>
                <h6 className='card-title font-weight-bolder name' style={{ color: '#0b9e43' }}>{resName}</h6>
                <div className='d-flex justify-content-between'>
                    <p style={{ fontSize: '10px', color: 'gray' }}>From: <span style={{ fontSize: '13px' }}>{fromDate}</span></p>
                    <p style={{ fontSize: '10px', color: 'gray' }}>To: <span style={{ fontSize: '13px' }}>{toDate}</span></p>
                </div>
                <p style={{ fontSize: '14px' }}>{details}</p>
                <div className='row mt-3'>
                    <button className='btn btn-primary mr-3 ml-3 mt-2' onClick={() => props.initUpdateProcess(_id)}>Update</button>
                    <button className='btn btn-danger mr-3 ml-3 mt-2' onClick={() => props.deleteReservation(_id)}>Delete</button>
                </div>
            </div>

        </div>
    )
};

export default OwnerReservationCard;