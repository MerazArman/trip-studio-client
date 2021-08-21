import React from 'react';
import imgCard1 from '../../../images/undraw_fashion_photoshoot_mtq8.png';
import imgCard2 from '../../../images/undraw_photo_session_clqr.png';
import imgCard3 from '../../../images/undraw_product_photography_91i2.png'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




const topServiceData = [
    {
        img: imgCard1,
        title: 'Free'
    },
    {
        img: imgCard2,
        title: 'Premium'
    },
    {
        img: imgCard3,
        title: 'Free'
    }
]

const TopService = () => {

    const [value, setValue] = React.useState(2);

    useEffect(() => {
        AOS.init({
            duration:1500,
            offset: 160,
            once: false,
            easing: 'ease',
        })
    },[])

    return (
        <section className="mt-3" style={{ border: '' }}>
            <div className="text-center">
                <p>Feel Free to Explore Our Free and Premium Courier Services</p>
                <h3>Our Popular Chunks</h3>
                <div className="testimonial-head mx-auto" data-aos="fade-right"></div>
            </div>
            <div className="row mt-5">
                {topServiceData.map(topService =>
                    <div className="col-md-4">

                        <div class="card" data-aos="fade-up">
                            <img src={topService.img} class="card-img-top w-75" alt="..." />
                            <div class="card-body">
                                <h6 class="card-text">Some quick example the card title.</h6>
                                <Box component="fieldset" mb={3} borderColor="transparent">
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                </Box>
                                <p>{topService.title}</p>
                            </div>
                        </div>

                    </div>)}

                    <div className="text-center py-3">
                    <button className=" btn btn-all"> View More Free Services</button>
                    </div>
            </div>
        </section>
    );
};

export default TopService;







{/* <div className="row text-center">
            <h3>GET THE FASTEST PRODUCT DELIVERY</h3>
                <div className="col-md-6 my-auto">
                    <div>
                        
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                            erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                            tation ullamcorper suscipit lobortis nisl ut aliquip.</p>
                    </div>
                        <ProgressBar ></ProgressBar>
                </div>

                <div className="col-md-6">
                    <img src={topServiceBenar} className=" shadow border img-fluid" alt="" />
                </div>
            </div> */}