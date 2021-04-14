import React from 'react';
import './Servicess.css';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServicesDetail from '../ServicesDetail/ServicesDetail';
const Servicess = () => {
    const servicesInfo = [
        {
            name: 'Fluoride Tretment',
            description: 'We are open 7 Days',
            img: fluoride,
        },
        {
            name: 'Cavity Filling',
            description: 'Brooklyn , NY 10036 , USA',
            img: cavity,
        },
        {
            name: 'Teath Whitening',
            description: '844432984',
            img: whitening,
        }
    ]
    return (
        <section className="  m-5 pt-5 mb-5 pb-5">
            <div className="text-center mb-5">
                <h4 style={{color:'#1CC7C1'}}>Our Services</h4>
                <h1 style={{color:'#3E465A'}}>Services We Provide</h1>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 grd mt-5 ">
                {
                    servicesInfo.map(service => <ServicesDetail service={service}></ServicesDetail>)
                }
            </div>
        </div>
        </section>
    );
};

export default Servicess;