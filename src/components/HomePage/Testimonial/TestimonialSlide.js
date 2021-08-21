import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaQuoteLeft } from 'react-icons/fa';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import './testimonial.css'


const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
       
        {
            breakpoint: 1224,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 880,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2
            }
        }
    ]
};


const TestimonialSlide = () => {

    const [testimonialsData, setTestimonialsData] = useState([]);
    // const handleAddPd = () => {
    //     fetch(`https://peaceful-badlands-83974.herokuapp.com/addAllReviews`, {
    //         method:'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(testimonialsData)
    //     })
    // }
    useEffect(() => {
        fetch(`https://calm-hollows-51020.herokuapp.com/showAllReviews`)
            .then(res => res.json())
            .then(data => setTestimonialsData(data))
    }, [])

    const [value, setValue] = React.useState(4);

    return (

        <div>
            <Slider {...settings} >


                {
                    testimonialsData.map(testimonialInfo =>
                        <div className="mt-5 py-5 ">
                           
                            <div className="px-3 ml-3 pb-2 " style={{border: '1px solid #999'}}>
                                <div style={{}} className="testimonial-icon  d-flex align-items-center justify-content-center">
                                <FaQuoteLeft  className=""></FaQuoteLeft>
                                </div>
                            <div className="">
                                <p>{testimonialInfo.comment} </p>
                                <div>
                                    <h5>{testimonialInfo.reviewName} </h5>
                                    <h4>{testimonialInfo.work} </h4>
                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                </Box>
                                </div>
                            </div>

                        </div>
                        </div>)
                }



            </Slider>
        </div>
    );
};

export default TestimonialSlide;