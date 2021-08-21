import React from 'react';
import { useForm } from 'react-hook-form';
import AdminNavbar from '../../../Shared/AdminNavbar/AdminNavbar';
import MainSidebar from '../../../Shared/Sidebar/MainSidebar';


const MakeAdmin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)

        fetch('https://calm-hollows-51020.herokuapp.com/addNewAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(admin =>{
            
            console.log(admin)
        })
        alert('your admin successfully updated')
    };
    console.log(errors);


    return (
        <main  className="">
            <div className="mb-5">
                <AdminNavbar></AdminNavbar>
            </div>
            <MainSidebar></MainSidebar>
            <section  className="container "  style={{ width: '80%', marginLeft: '20%', marginTop: '100px', border: '', boxShadow: '' }}>
                <form onSubmit={handleSubmit(onSubmit)} className="p-5 w-50 mx-auto border">
                    <div class="mb-3">
                        <input type="text" placeholder="Name" class="form-control" {...register("name", { required: true, maxLength: 80 })} />

                    </div>
                    <div class="mb-3">
                        <input type="email" placeholder="Email" class="form-control" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />

                    </div>

                    <div className="mb-3">
                        <input className="btn btn-primary" type="submit" />
                    </div>


                </form>
            </section>
        </main>
    );
};

export default MakeAdmin;