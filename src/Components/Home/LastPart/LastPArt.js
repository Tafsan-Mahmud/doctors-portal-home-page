import React from 'react';
import './LastPArt.css';
import facebook from './icon-fb.png';
import google from './icon-google.png';
import twitter from './icon-twitter.png';

const LastPArt = () => {
    return (
        <section className="last-part">
            <div className="container">
                <div className="for-bg">
                    <div className="row">
                        <div className="d-flex justify-content-center">
                            <div className="col-md-3 mt-5 all-text">
                                <h5>Emergency Dental Care</h5>
                                <h5>Check Up</h5>
                                <h5>Tretment Of Personal Diseases</h5>
                                <h5>Tooth Extraction</h5>
                                <h5>Check Up</h5>
                            </div>
                            <div className="col-md-3 all-text">
                                <h4>Services</h4>
                                <h5>Emergency Dental Care</h5>
                                <h5>Check Up</h5>
                                <h5>Tretment Of Personal Diseases</h5>
                                <h5>Tooth Extraction</h5>
                                <h5>Check Up</h5>
                                <h5>Check Up</h5>
                                <h5>Check Up</h5>
                            </div>
                            <div className="col-md-3 all-text">
                                <h4>Oral Health</h4>
                                <h5>Emergency Dental Care</h5>
                                <h5>Check Up</h5>
                                <h5>Tretment Of Personal Diseases</h5>
                                <h5>Tooth Extraction</h5>
                                <h5>Check Up</h5>
                                <h5>Check Up</h5>
                                <h5>Check Up</h5>
                            </div>
                            <div className="col-md-3 all-text">
                                <h4>Our Address</h4>
                                <h5>New York - 101010 Hudson</h5>
                                <h5>Yards</h5>
                                <div className="social-icons">
                                    <ul className="d-flex">
                                        <li><img src={facebook} alt="" /></li>
                                        <li><img src={google} alt="" /></li>
                                        <li><img src={twitter} alt="" /></li>
                                    </ul>
                                </div>
                                <div className="call-now">
                                    <h6 style={{color:'darkgrey'}}>Call Now</h6>
                                    <button className="btn btn-primary">+83491124</button>
                                </div>
                            </div>

                        </div>
                        <p>Copyright {(new Date().getFullYear())} All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LastPArt;