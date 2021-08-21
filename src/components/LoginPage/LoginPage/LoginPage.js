import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import LoginForm from '../LoginForm/LoginForm';

const LoginPage = () => {
    return (
        <section className="container-fluid">
            <Navbar></Navbar>
            <div className="row">
                <LoginForm></LoginForm>
            </div> 
        </section>
    );
};

export default LoginPage;