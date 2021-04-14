import React from 'react';
import './InfoCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoCard = (props) => {
    const {title , description , icon , background ,}=props.info
    return (
        <div className="col-md-4 mb-5 text-white">
            <div className={`d-flex justify-content-center align-items-center info-container info-${background}`}>
            <div className="spaceing">
            <FontAwesomeIcon className="info-icon" icon={icon} />
            </div>
            <div>
                <h5>{title}</h5>
                <small>{description}</small>
            </div>
            </div>
        </div>
    );
};

export default InfoCard;