import React from 'react';
import TestimonialSlide from './TestimonialSlide';
import testimonialImg from '../../../images/undraw_Personal_text_re_vqj3.png'
import './testimonial.css'


const Testimonial = () => {

    return (
        <section className=" py-5 mt-3 text-light" style={{ border: '', backgroundColor: '' }}>

            <div className="container-fluid ">
                <div className="text-center">
                    <h5 className="text-uppercase ">Testimonial</h5>
                    <div className="testimonial-head mx-auto"></div>
                    <h3 className=""> Kinds Words From Clients</h3>
                </div>

                <div className="row">
                <div className="col-md-7">
                        <div className="px-4">

                            <TestimonialSlide></TestimonialSlide>
                        </div>
                    </div>
                    <div className="col-md-5 border-start pt-5">
                        <img src={testimonialImg} className="img-fluid" alt="" />
                    </div>
                    
                </div>

            </div>
        </section>
    );
};

export default Testimonial;