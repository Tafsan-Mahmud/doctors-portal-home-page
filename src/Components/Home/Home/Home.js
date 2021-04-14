import React from 'react';
import Blog from '../Blog/Blog';
import ContactUs from '../ContactUs/ContactUs';
import ExceptionalPage from '../ExceptionalPage/ExceptionalPage';
import Header from '../Header/Header';
import LastPArt from '../LastPart/LastPArt';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import OurDoctor from '../OurDoctor/OurDoctor';
import Servicess from '../Servicess/Servicess';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Servicess></Servicess>
            <ExceptionalPage></ExceptionalPage>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <OurDoctor></OurDoctor>
            <ContactUs></ContactUs>
            <LastPArt></LastPArt>
        </div>
    );
};

export default Home;