import React from 'react';
import pic1 from './Ellipse 1.png';
import pic2 from './Ellipse 2.png';
import pic3 from './Ellipse 3.png';
import './Testimonial.css';
import TestimonialDetails from './TestimonialDetails';

const Testimonial = () => {
    const lorem = 'Lorem vero  quam aliquam, voluptas dolores hic pariatur, sed nisi enim in libero voluptatibus eius maiores! Molestiae suscipit quod vero.'
    const testimonialData = [
        {
            name: 'Winson Herry',
            description: lorem,
            img: pic1,
            address: 'Bangladesh'
        },
        {
            name: 'Muinson Berry',
            description: lorem,
            img: pic2,
            address: 'London'
        },
        {
            name: 'Liba Mesbah',
            description: lorem,
            img: pic3,
            address: 'California'
        }
    ]
    return (
        <section className="container tesimonial-part">
            <div className="row">
                <div className="text-part">
                    <h4>TESTIMONIAL</h4>
                    <h1>Whats Our Patient's <br /> Says</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="grd">
                        {
                            testimonialData.map(tInfo => <TestimonialDetails info={tInfo}></TestimonialDetails>)
                        }
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonial;