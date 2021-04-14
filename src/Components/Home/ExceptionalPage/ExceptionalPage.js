import React from 'react';
import bbyimg from '../../../images/exceptional.png';
import './ExceptionalPage.css';
const ExceptionalPage = () => {
    return (
        <section className="mb-5">
            <div className="row mt-5 pt-5 d-flex container-fluid align-items-center">
                <div className="img-div col-md-4  offset-md-1">
                    <img  className="" src={bbyimg} alt=""/>
                </div>
                <div className="text-div col-md-6">
                    <h1 style={{color:'#3A4256'}} className="mb-5">Exceptional Dental Care <br/> On Your terms</h1>
                    <p className="text-secondary exp-h6">Lorem voluptate dignissimos amet fuga? Maxi <br/> ate dignissimos amet fuga? Maxime, pariatur ipsam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatem, nesciunt aperiipsam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatem, nesciunt aperiam eos, provident nihil dolor aliquam totam corporis esse cupiditate magni vitae voluptate dignissimos amet fuga? Maxime, pariatur ipsam?</p>
                    <button className="btn btn-primary mt-3">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default ExceptionalPage;