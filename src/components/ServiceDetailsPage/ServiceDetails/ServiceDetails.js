import React from 'react';
import detailsPic from '../../../images/undraw_moments_0y20.png';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './servicedetails.css'


const ServiceDetails = () => {


    useEffect(() => {
        AOS.init({
            duration:2000,
            offset: 160,
            once: false,
            easing: 'ease',
        })
    },[])

    const { serviceKey } = useParams()
    const [services, setServices] = useState({});
    useEffect(() => {
        fetch(`https://peaceful-badlands-83974.herokuapp.com/showAllServices/${serviceKey}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data)
            })
    }, [])


    return (
        <section className="border" style={{ border: '' }}>
            <div className="row  align-items-center ">
                <div className="col-md-6">
                    <img src={detailsPic} className="img-fluid p-5" alt="" />
                </div>

                <div className="col-md-6"  data-aos="fade-right">
                    <h6 className="text-center text-muted"> <small> YOUR SELECTED SERVICE </small> </h6>
                    <div className=" mx-auto"  style={{borderBottom: '3px solid #01D28E', borderRadius: '2px',width: '90px'}}>  </div>
                    <h3 className="text-center"> {services.title} Service</h3>
                    <p className="pr-5"> <span >  Description </span> : <br />
                        {services.description} Our company is reliable, and our work is trusted. We provide worry-free service you can always count on
                    </p>
                    <p className="pr-5  ">
                        <span > Service Category </span>: Photography & Cinematography
                    </p>
                    <p className="pr-5 ">
                        <span > Service Type </span>:  Premium Service 
                    </p>
                    <p className="pr-5 ">
                        <span > Photographer </span>:  {services.photographer} 
                    </p>
                    <p className="pr-5 ">
                        <span > Service Price </span>:   {services.price}
                    </p>
                    <div className="text-center">
                        <button className="btn btn-all">Below Your Price List     <div className=" text-center"><HiOutlineArrowNarrowDown></HiOutlineArrowNarrowDown> </div></button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;