import React from 'react';
import aboutImg from '../../../../images/undraw_moments_0y20.png'
import AboutFooter from './AboutFooter';
const About = () => {
    return (
        <section className="">
            <h5 className="text-center">About us</h5>
            <div className="row mt-3">
                <div className="col-md-6 ml-5 p-5">
                    <h6 className="" style={{color:'rgb(1, 210, 142)'}}>More than 25 Years of Experience</h6>
                    <h1>Our philosophy and mission</h1>
                    <p>Drone technology is constantly evolving as new innovation and big investment are bringing more advanced drones to the market every few months. We are following the drone market novelties to use the best technologies for making photo and video.</p>
                    {/* <button className="btn btn-all">READ MORE ABOUT US</button> */}
                    <AboutFooter></AboutFooter>
                </div>

                <div className="col-md-5 my-auto">
                    <img src={aboutImg} className="w-100 ml-5 border-start" alt="" />
                    <div className=" about-img-content text-center" >
                        <h1 className="text-light">25</h1>
                        <h5 className="text-light">years of<br />experience</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;