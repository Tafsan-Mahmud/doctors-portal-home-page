import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <section className="contact-part container">
            <div className="contact ">
                <div className="d-flex justify-content-center">

                    <div className="input-form ">
                        <div className="text-contact">
                            <h3>Contact Us</h3>
                            <h1>Always Contact With Us</h1>
                        </div>
                        <form action="">
                            <input className="form-control input1" required placeholder="email addrsee*" type="text" />
                            <input className="form-control input1" required placeholder="subject*" type="text" />
                            <input className="form-control input2" required placeholder="your massage*" type="text" />
                            <input id="contact-submit" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;