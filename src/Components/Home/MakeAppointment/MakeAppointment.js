import React from 'react';
import singleDoctImg from '../../../images/doctor.png';
import './MakeAppointment.css';
const MakeAppointment = () => {
    return (
        <section className='need-padding'>
            <div className="banner container">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="doctor-img">
                                <img src={singleDoctImg} alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="appointment-part">
                                <h6>APPOINTMENT</h6>
                                <h1 style={{color:'#fff'}}>Make an Appointment <br /> Today</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur earum deserunt eveniet at, enim molestias praesentium cupiditate quod doloribus rem?</p>

                                <button className="my-btn">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;