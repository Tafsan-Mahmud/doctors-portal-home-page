import React from 'react';
import './OurDoctor.css';
import doctor from '../../../images/doctor.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const OurDoctor = () => {
    return (
        <section className="doctor-part">
            <div className="container">
                <div className="doctor-text">
                    <h1>Our Doctor</h1>
                </div>
                <div className="row ">
                   <div className="d-flex justify-content-center">
                   <div className="col-md-4 doctor">
                        <img src={doctor} alt=""/>
                        <h3>Dr. Vishal</h3>
                        <p><span style={{color:'#0072e4'}}><FontAwesomeIcon icon={faPhoneAlt} /></span> +6721766428</p>
                    </div>
                    <div className="col-md-4 doctor">
                        <img src={doctor} alt=""/>
                        <h3>Dr. Vishal</h3>
                        <p><span style={{color:'#0072e4'}}><FontAwesomeIcon icon={faPhoneAlt} /></span> +6721766428</p>
                    </div>
                    <div className="col-md-4 doctor">
                        <img src={doctor} alt=""/>
                        <h3>Dr. Vishal</h3>
                        <p><span style={{color:'#0072e4'}}><FontAwesomeIcon icon={faPhoneAlt} /></span> +6721766428</p>
                    </div>
                   </div>
                </div>
            </div>
        </section>
    );
};

export default OurDoctor;