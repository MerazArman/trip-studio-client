import React from 'react';
// import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';



const CheckoutForm = ({addToCart, userLogged}) => {

// const [formdata, setFormdata] = useState({});
const { register, handleSubmit, formState: { errors } } = useForm();




const onSubmit = (data) => {
    // console.log(data);
const usersBookings = { ...addToCart, ...data }
console.log(usersBookings);
    fetch(`http://localhost:4050/addUsersBooking`,{
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(usersBookings)
      })
      .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        alert("your Booking done")
}



    return (
        <section>
                <form onSubmit={handleSubmit(onSubmit)} className="container">
           <div className="w-50 mx-auto mt-5">
           <div className="form-group">
                    <input type="text" className="form-control" value={userLogged.name}  placeholder="Your Name" {...register("name", { required: true, maxLength: 80 })} />
                    {errors.name && <span className="text-danger">This field is required</span>} 
                    </div>
                    <div className="form-group">
                    <input type="email" placeholder="Email"  className="form-control" value={userLogged.email}   {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                    {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control"placeholder="Mobile Number" {...register("mobile", { required: true })} />
                    {errors.mobile && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="row form-group">
                        <div className="col-md-6 ">
                        <input type="text" className="form-control" placeholder="Country" {...register("country", { required: true })} />
                        {errors.country && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-md-6 ">
                        <input type="text" className="form-control" placeholder="City" {...register("city", { required: true })} />
                        {errors.city && <span className="text-danger">This field is required</span>}
                        </div>
                    </div> 
        
                    <div className="form-group">
                    <input type="text" className="form-control"   placeholder="Address" {...register("address", { required: true, maxLength: 90 })} />
                    {errors.name && <span className="text-danger">This field is required</span>} 
                    </div>
                    <div className="form-group">
                    <input className="btn btn-all " type="submit" />
                    </div>
           </div>
        </form>
        </section>
        
    );
};

export default CheckoutForm;