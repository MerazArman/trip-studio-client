import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import ServiceHeader from '../ServiceHeader/ServiceHeader';

const ServiceDetailsPage = () => {
    return (
        <main className="container-fluid">
            <Navbar></Navbar>
            <ServiceHeader></ServiceHeader>
            <ServiceDetails></ServiceDetails>
            <Footer></Footer>
        </main>
    );
};

export default ServiceDetailsPage;