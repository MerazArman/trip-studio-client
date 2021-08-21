import React from 'react';
import { SiAffinityphoto, SiYoutubestudio } from 'react-icons/si';
import { Ri24HoursFill } from 'react-icons/ri';
import { FaCreativeCommonsBy } from 'react-icons/fa';
import { GiDeliveryDrone } from 'react-icons/gi';

const fakeInfo = [
    {
        key: '1a',
        title: 'Expert Photographer',
        description:'Our company is reliable, and our work is trusted.',
        img: <SiAffinityphoto></SiAffinityphoto>,
    },
    {
        key: '1a',
        title: 'Best Technology',
        description:'Our company is reliable, and our work is trusted.',
        img: <GiDeliveryDrone></GiDeliveryDrone>,
    },
    {
        key: '1a',
        title: '24/7 Services',
        description:'Our company is reliable, and our work is trusted.',
        img: <Ri24HoursFill></Ri24HoursFill>,
    },
    {
        key: '1a',
        title: 'Eco friendly',
        description:'Our company is reliable, and our work is trusted. .',
        img: <FaCreativeCommonsBy></FaCreativeCommonsBy>,
    },
    {
        key: '1a',
        title: 'Expert Photographer',
        description:'Our company is reliable, and our work is trusted.',
        img: <SiAffinityphoto></SiAffinityphoto>,
    },
    {
        key: '1a',
        title: 'Eco friendly',
        description:'Our company is reliable, and our work is trusted. .',
        img: <FaCreativeCommonsBy></FaCreativeCommonsBy>,
    }
]


const ChoosUs = () => {
    return (
        <section  className="mt-5">
            <div className="row container mx-auto shadow-lg">
                {
                    fakeInfo.map(info => 
                        <div className="col-md-4 d-flex ">
                   <p className="p-3" style={{ fontSize:'40px', color:'rgb(1, 210, 142)'}}> {info.img}</p>
                    <div className="p-3">
                        <h5>{info.title} </h5>
                        <h6> <small className="text-muted"> {info.description} </small> </h6>
                    </div>
                </div>)
                }
                {/* <div className="col-md-3 d-flex">
                   <p className="p-3"> <SiAffinityphoto style={{ fontSize:'40px', color:'rgb(1, 210, 142)'}}></SiAffinityphoto></p>
                    <div className="p-3">
                        <h5>Expert Photographer</h5>
                        <h6> <small className="text-muted"> Lorem ipsum dolor sitam consect etur adipiscing elit tellus, </small> </h6>
                    </div>
                </div>
                <div className="col-md-3">
                    <GiDeliveryDrone ></GiDeliveryDrone>
                    <h5>Best Technology</h5>
                    <p>Lorem ipsum dolor sitam consect etur adipiscing elit tellus,</p>
                </div>
                <div className="col-md-3">
                    <Ri24HoursFill></Ri24HoursFill>
                    <h5>24/7 Services Provide</h5>
                    <p>Lorem ipsum dolor sitam consect etur adipiscing elit tellus,</p>
                </div>
                <div className="col-md-3">
                    <FaCreativeCommonsBy></FaCreativeCommonsBy>
                    <h5>Eco friendly</h5>
                    <p>Lorem ipsum dolor sitam consect etur adipiscing elit tellus,</p>
                </div> */}
            </div>
        </section>
    );
};

export default ChoosUs;