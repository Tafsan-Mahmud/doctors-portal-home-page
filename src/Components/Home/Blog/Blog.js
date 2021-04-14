import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import pic1 from './Ellipse 1.png';
import pic2 from './Ellipse 2.png';

const Blog = () => {
    return (
        <section className="container blog-section">
            <div className=" text-center blog-text-part">
                <h3>Our Blog</h3>
                <h1>From Our Blog News</h1>
            </div>
            <div className="card-section">
                <div className="card my-card2 crd-bg">
                    <h3>Rasedh Kabir</h3>
                    <h5>22 Aug 2018</h5>
                    <div className=" d-flex img-name-address justify-content-center">
                        <div>
                            <h2>Check at least a doctor in a year for your teeth </h2>
                            <h1><FontAwesomeIcon icon={faLongArrowAltRight} /></h1>
                        </div>

                    </div>
                </div>
                <div className="card my-card2">
                    <div className=" d-flex img-name-address2 justify-content-center">
                        <img src={pic1} alt="" />
                        <div>
                            <h2>Dr. Caudi</h2>
                            <h4 className="text-secondary">
                                23 April 2019
                            </h4>
                        </div>
                    </div>
                    <h3>Two Times Of Brush in A Day Can <br /> Keep You Healthy</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nemo nobis pariatur officiis.</p>
                </div>
                <div className="card my-card2">
                    <div className=" d-flex img-name-address2 justify-content-center">
                        <img src={pic2} alt="" />
                        <div>
                            <h2>Dr. Caudi</h2>
                            <h4 className="text-secondary">
                                23 April 2019
                            </h4>
                        </div>
                    </div>
                    <h3>Two Times Of Brush in A Day Can <br /> Keep You Healthy</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nemo nobis pariatur officiis.</p>
                </div>
            </div>
        </section>
    );
};

export default Blog;