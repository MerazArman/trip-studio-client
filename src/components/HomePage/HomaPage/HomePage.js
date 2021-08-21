import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutSection from '../AboutSection/AboutSection/AboutSection';
import ChoosUs from '../ChoosUs/ChoosUs';
import Contact from '../Contact/Contact';
import Header from '../HeaderSection/Header/Header';
import ServiceSection from '../ServiceSection/ServiceSection/ServiceSection';
import Testimonial from '../Testimonial/Testimonial';
import TopService from '../TopService/TopService';

const HomePage = () => {
    return (
        <main className="container-fluid" >
            <Header></Header>
            <AboutSection></AboutSection>
            <ChoosUs></ChoosUs>
            <ServiceSection></ServiceSection>
            <TopService></TopService>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </main>
    );
};

export default HomePage;