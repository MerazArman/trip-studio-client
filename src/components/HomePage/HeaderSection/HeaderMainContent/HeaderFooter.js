import React from 'react';
import './headerMain.css';
import { GoDeviceCamera } from 'react-icons/go';




const HeaderFooter = () => {
    return (
        <div className="footer-box w-75 mx-auto">
            <div className="row " >
                <div className="col-md-7 ">
                    <h5 className="text-light ml-5 mt-5">We are visual production company, specializing in videography and photography </h5>

                </div>
                <div className="col-md-4 text-center" style={{color:'rgb(1, 210, 142)', fontSize:'100px'}}>
                    <GoDeviceCamera ></GoDeviceCamera>
                </div>
            </div>
        </div>
    );
};

export default HeaderFooter;