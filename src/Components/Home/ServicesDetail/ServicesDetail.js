import React from 'react';
import './ServicesDetail';

const ServicesDetail = (props) => {
    const {name , img , description} = props.service
    return (
        <div>
            <div className="text-center mt-4">
                <img style={{height:'90px'}} src={img} alt=""/>
                <h5 className="mt-4 mb-4">{name}</h5>
                <p className="text-secondary">Lorem ipsum quisquam consendus omnis dignissimos animi perspiciatis doloribus aperiam ducimus ex quibusdam dolorum in iusto.</p>
            </div>
        </div>
    );
};

export default ServicesDetail;