import React from 'react';
import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import contactBener from '../../../images/undraw_personal_44information_re_vw8a.png';




const Contact = () => {


    useEffect(() => {
        AOS.init({
            duration:1500,
            offset: 140,
            once: false,
            easing: 'ease',
        })
    },[])


    return (
        <section style={{border:''}} className="contact my-3 py-3">
        <div className="">
            <div className="section-header text-center text-white mb-5">
            <p className="">Always  connect with us</p>
                 <h5 style={{color:'#323EBE'}}>Contact</h5>
                 <div className="testimonial-head mx-auto" data-aos="fade-left"></div>
                 
            </div>
            <div className="row">
                <div className="col-md-7">
                    <img src={contactBener} className="img-fluid " data-aos="fade-right" alt="" />
                </div>

                <div className="col-md-5">
                <form action="" className="p-5 " >
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email Address *"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Subject *"/>
                    </div>
                    <div className="form-group">
                        <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                    </div>
                    <div className="form-group text-center">
                        <button type="button" className="btn  all-btn"> Submit </button>
                    </div>
                </form>
            </div>
            </div>
           
        </div>
    </section>
    );
};

export default Contact;