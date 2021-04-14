import React from 'react';


const TestimonialDetails = (props) => {
    const { name, description, img, address } = props.info
    return (
        <div>
            <div className="card my-card">
                <p className="text-secondary">
                    {description}
                </p>
                <div className=" d-flex img-name-address justify-content-center">
                    <img src={img} alt="" />
                    <div>
                        <h2>{name}</h2>
                        <h4 className="text-secondary">
                            {address}
                        </h4>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TestimonialDetails;