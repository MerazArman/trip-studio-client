import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Checkout from '../Checkout/Checkout';




const CheckoutPage = () => {

    return (
        <main style={{border: '1px solid red'}} className="container-fluid">
            <Navbar></Navbar>
            <Checkout></Checkout>
        </main>
    );
};

export default CheckoutPage;