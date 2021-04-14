import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faPhoneAlt, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
const BusinessInfo = () => {
    const infosData = [
        {
            title: 'Opening Hours',
            description: 'We are open 7 Days',
            icon: faClock,
            background: 'primary'
        },
        {
            title: 'Visit Our Location',
            description: 'Brooklyn , NY 10036 , USA',
            icon: faMapMarkedAlt,
            background: 'dark'
        },
        {
            title: 'Contact Us Now',
            description: '844432984',
            icon: faPhoneAlt,
            background: 'primary'
        }
    ]
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infosData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;