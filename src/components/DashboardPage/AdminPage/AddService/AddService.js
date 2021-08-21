import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const AddService = () => {


    const [imgURL, setImgURL] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleFileUpload = (e) => {
        console.log(e.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '269dd5b552262db5ca2f398aa2e7dcf6');
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            console.log(response);
            setImgURL(response.data.data.display_url)
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    const onSubmit = (data) => { 
        let newServiceAddForm = {...data};
        newServiceAddForm.img = imgURL;
        // console.log(newServiceAddForm);
        fetch(`http://localhost:4050/addNewServices`,{
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(newServiceAddForm)
      })
      .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        alert("your Booking done")
}
       



    return (
        <main className="container-fluid">
            <section>
                <form onSubmit={handleSubmit(onSubmit)} className="container">
                    <div className="mx-auto mt-5 w-75">
                        <div className="row form-group">
                            <div className="col-md-8">
                                <input type="text" className="form-control" placeholder="Service Title" {...register("title", { required: true, maxLength: 100 })} />
                                {errors.title && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-md-4">
                                <input type="text" className="form-control" placeholder="Photographer" {...register("photographer", { required: true })} />
                                {errors.photographer && <span className="text-danger">This field is required</span>}
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col-md-3">
                                <input type="text" className="form-control" placeholder="Status" {...register("status", { required: true, maxLength: 100 })} />
                                {errors.status && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-md-3">
                                <input type="text" className="form-control" placeholder="Price" {...register("price", { required: true })} />
                                {errors.price && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="col-md-6">
                                <input type="file" className="form-control" placeholder="" required onChange={handleFileUpload} />
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" placeholder="Description" rows="5" {...register("description", { required: true })} />
                            {errors.description && <span className="text-danger">This field is required</span>}
                        </div>
                       
                        <div className="form-group">
                            <input className="btn btn-all " type="submit" />
                        </div>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default AddService;