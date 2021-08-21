import React from 'react';
import aboutImg from '../../../images/3881176.jpg';
import './About.css';
import ScrollAnimation from 'react-animate-on-scroll';
import { Animated } from "react-animated-css";
import AboutCard from './AboutCard';
import ProgressBar from '../TopService/ProgressBar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {

    useEffect(() => {
        AOS.init({
            duration:1600,
            offset: 150,
            once: false,
            easing: 'ease',
        })
    },[])

    return (
        <section style={{ border: "" }} className="mt-3 " id="about">
            <div className="container">
                <div className="text-center pt-3">
                <h5 >About us</h5>
                <div className="testimonial-head mx-auto"  data-aos="fade-left"></div>
                </div>
                
                <div className="row ">
                    <div className="col-md-6 align-self-center " data-aos="fade-right" >
                        <img src={aboutImg} className="shadow img-fluid w-100" alt="" />
                        <div className=" about-img-content text-center py-4 ml-auto border" >
                            <h6 >Since</h6>
                            <h5>1994</h5>
                        </div>
                    </div>

                    <div className="col-md-6 align-self-center ">
                        <div className="ml-3 pl-5" >
                            <h3>We Have 25 Years Experience Logistics and Freight Services</h3>
                            {/* <h6>We At CargoTon Offer The Best Services At The Best Fares Available In The Market.</h6> */}
                            <p className="text-muted" data-aos="fade-left">Our company has grown into a dynamic force in transportation across the world. Equipped with state-of-the-art technologies, warehouse services, carrier-partners and dedicated employees, CargoTon will meet all of your transport needs.</p>
                        </div>

                        <div className="mt-5 ml-5" data-aos="fade-right">
                            <ProgressBar></ProgressBar>

                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;