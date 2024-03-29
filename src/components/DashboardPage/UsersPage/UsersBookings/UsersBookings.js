import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import AdminNavbar from '../../../Shared/AdminNavbar/AdminNavbar';
import MainSidebar from '../../../Shared/Sidebar/MainSidebar';
import BookingsList from '../BookingsList/BookingsList';


const UsersBookings = () => {

    const [userLogged, setUserLogged] = useContext(UserContext)
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch(`https://peaceful-badlands-83974.herokuapp.com/showYourOwnOrders?email=${userLogged.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBookings(data)
            })
    }, [])

    console.log(bookings)

    return (
        <section className="container-fluid">
              <div className="mb-5">
                <AdminNavbar></AdminNavbar>
            </div>
            <MainSidebar ></MainSidebar>
            <div className="" style={{ width: '80%', marginLeft: '20%', marginTop: '100px', border: '' }}>
           {
               bookings.length ?  <BookingsList bookings={bookings} ></BookingsList>
           : <div className="row">
               <h1> You Have No Bookings</h1>
           </div>
           }

            </div>
        </section>
    );
};

export default UsersBookings;




// style={{ width: '75%', marginLeft: '20%', marginTop: '100px', border: '' }}