import React from 'react';
import serviceBenner from '../../../images/photo-1542038784456-1ea8e935640e.jpeg'

const ServiceHeader = () => {
    return (
        <section  >
            <div class="card bg-dark text-white">
                <img src={serviceBenner} class="card-img " style={{height: '30vh', opacity: '.4', objectFit:'cover'}} alt="..." />
                <div class="card-img-overlay">
                    <h3 class="text-light">SERVICE DETAILS</h3>
                </div>
            </div>
        </section>
    );
};

export default ServiceHeader;