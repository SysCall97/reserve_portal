import React from 'react';

const CustomerReviewCard = (props) => {
    const { name, img, designation, review } = props.customer;
    console.log({ name, img, designation, review })
    return (
        <section className="mr-4 mt-4 p-4 col-md-3" style={{ borderRadius: "5px", backgroundColor: "white", border: "none" }}>
            <div className="row">
                <div className="col-3">
                    <img src={img} alt="" className="img-fluid" style={{ borderRadius: "50%" }} />
                </div>
                <div>
                    <h5 className="font-weight-bolder">{name}</h5>
                    <h6 className="font-weight-bold">{designation}</h6>
                </div>
            </div>
            <div>
                <p style={{ color: "#707070" }}>
                    {review}
                </p>
            </div>

        </section>
    );
};

export default CustomerReviewCard;