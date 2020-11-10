import React from 'react';
import client_1 from '../../../Images/customer-1.png'
import client_2 from '../../../Images/customer-2.png'
import client_3 from '../../../Images/customer-3.png'
import CustomerReviewCard from './CustomerReviewCard';

const customers = [
    {
        name: "Anna Gunn",
        img: client_1,
        designation: 'CEO, Pan pacific',
        review: 'Awesome web application to maintain the reservations. I must recommend it.'
    },
    {
        name: "Andrew Mark",
        img: client_2,
        designation: 'CEO, The Oberoi Rajvilas, Jaipur',
        review: 'Awesome web application to maintain the reservations. I must recommend it.'
    },
    {
        name: "Walter White",
        img: client_3,
        designation: 'MD, The Oberoi Rajvilas, Jaipur',
        review: 'Awesome web application to maintain the reservations. I must recommend it.'
    }
]

const CustomerReview = () => {
    let key=0;
    return (
        <section className='mt-5 mb-5 mw-100' id='reviews'>
            <div data-aos="fade-up" className='text-center caption'>Customer Reviews</div>
            <div data-aos="fade-down" className='row d-flex justify-content-center flex-wrap mw-100 pl-5 pt-4 pb-4'>
                {
                    customers.length && 
                    customers.map((customer) => <CustomerReviewCard customer={customer} key={++key} />)
                }
            </div>
        </section>
    );
};

export default CustomerReview;