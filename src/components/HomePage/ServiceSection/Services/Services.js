import React, { useEffect, useState } from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
import './service.scss'


const fakeServices = [
    {
        
        title: 'WEDDING CINEMATOGRAPHY & FILM',
        description: 'Our company is reliable, and our work is trusted. We provide worry-free service you can always count on.',
        img: "https://imgur.com/D4sLUGU.png",
        status: "pending",
        price: 187
    },
    {
        
        title: 'BIRTHDAY CINEMATOGRAPHY ',
        description: 'Our company is reliable, and our work is trusted. We provide worry-free service you can always count on.',
        img: "https://imgur.com/Xlaaz1p.png",
        status: "pending",
        price: 297
    },
    {
        
        title: 'NEWBORN PHOTOGRAPHY',
        description: 'Our company is reliable, and our work is trusted. We provide worry-free service you can always count on.',
        img: "https://imgur.com/TO2icUe.png",
        status: "pending",
        price: 783
    },
    {
        
        title: 'GREET ENGAGEMENT PHOTOGRAPHY',
        description: 'Our company is reliable, and our work is trusted. We provide worry-free service you can always count on.',
        img: "https://imgur.com/cRULinx.png",
        status: "pending",
        price: 564
    }

]

const Services = () => {

const [photography, setPhotography] = useState([])
useEffect(() => {
    fetch(`http://localhost:4050/showAllServices`)
    .then(res => res.json())
    .then(data => setPhotography(data))
},[])

    return (
        <section className=" mt-5 container-fluid">
            <div className="row">
                {
                    photography.map(photographyService => <ServicesCard photographyService={photographyService}></ServicesCard>)
                }
            </div>
        </section>
    );
};

export default Services;