import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutSection from '../AboutSection/AboutSection/AboutSection';
import ChoosUs from '../ChoosUs/ChoosUs';
import Contact from '../Contact/Contact';
import Header from '../HeaderSection/Header/Header';
import ServiceSection from '../ServiceSection/ServiceSection/ServiceSection';
import TopService from '../TopService/TopService';

const HomePage = () => {
    return (
        <main className="container-fluid" style={{border: '1px solid green'}}>
            <Header></Header>
            <AboutSection></AboutSection>
            <ChoosUs></ChoosUs>
            <ServiceSection></ServiceSection>
            <TopService></TopService>
            <Contact></Contact>
            <Footer></Footer>
        </main>
    );
};

export default HomePage;