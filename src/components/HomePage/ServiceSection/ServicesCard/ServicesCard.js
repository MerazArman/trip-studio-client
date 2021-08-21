import React from 'react';
import { useHistory } from 'react-router-dom';
import '../Services/service.scss';




const ServicesCard = ({photographyService}) => {
console.log(photographyService);

const history = useHistory()
const serviceBuyHandler = (id) => {
    history.push(`/checkoutPage${id}`)
}

    return (
        <div className="col-md-6">

                            <div className="card mb-3">
                                <div className="row card1">
                                    <div className="col-md-4">
                                        <img src={photographyService.img} className="imgtest"  alt="" />
                                    </div>
                                    <div className="col-md-8 card-body description">
                                        <h2> {photographyService.title}</h2>
                                        <h4>Popular House Plant</h4>
                                        <h1>${photographyService.price} </h1>
                                        <p> {photographyService.description}</p>
                                        <button>VIEW MORE</button>
                                        <button onClick={() => serviceBuyHandler(photographyService._id)}>BUY NOW</button>
                                    </div>
                                </div>
                            </div>

                        </div>
    );
};

export default ServicesCard;