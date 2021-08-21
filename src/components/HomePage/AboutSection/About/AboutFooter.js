import React from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import { IoCall } from 'react-icons/io5';
import './about.css';
// import { FaBeer } from 'react-icons/fa';



const AboutFooter = () => {
    return (
        <div className="row">
            <div className="col-md-7 li-style text-muted border-end">
                <ul className="my-5">
                    <li> <AiFillCaretRight style={{color:'rgb(1, 210, 142)'}}></AiFillCaretRight> 100% Customer Satisfaction</li>
                    <li> <AiFillCaretRight style={{color:'rgb(1, 210, 142)'}}></AiFillCaretRight>  Free Collection & Delivery</li>
                    <li> <AiFillCaretRight style={{color:'rgb(1, 210, 142)'}}></AiFillCaretRight>  Affordable Prices</li>
                    <li><AiFillCaretRight style={{color:'rgb(1, 210, 142)'}}></AiFillCaretRight>  Best Quality</li>
                </ul>
            </div>

            <div className="col-md-5 text-center ">
               <p> <IoCall style={{color:'rgb(1, 210, 142)', fontSize:'50px'}}></IoCall> </p> 
                <p>Call for Quality Services</p>
                <button className="btn btn-all">+8801715643500</button>
            </div>
        </div>
    );
};

export default AboutFooter;