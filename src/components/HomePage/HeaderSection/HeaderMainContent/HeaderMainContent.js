import React from 'react';
import baner from '../../../../images/undraw_videographer_nnc7.png';
import HeaderFooter from './HeaderFooter';
import './headerMain.css'
const HeaderMainContent = () => {
    return (
        <section style={{border: '1px solid blue', backgroundColor: '#F4F4F4'}} className="">
              <div className="row " style={{backgroundColor: '#F4F4F4'}}>
              <div className="col-md-6 shadow-lg pb-5">
                <img src={baner} class="img-fluid " alt="..."  />
              </div>
              <div className="col-md-5 ml-5 mt-5" >
                <h1 className="">Capture Your Precious Moments With Us</h1>
                <p className="pr-4 text-start">Our company has grown into a dynamic force in transportation across the dynamic force in transportation world. </p>
                <button className="btn btn-all">BOOKING NOW</button>
              </div>
            </div>
            <div className="container header-foot-design">
            <HeaderFooter></HeaderFooter>
            </div>
           
        </section>
    );
};

export default HeaderMainContent;