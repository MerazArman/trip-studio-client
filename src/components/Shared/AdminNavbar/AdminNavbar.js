import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from "../../../App";

const AdminNavbar = () => {

    const [userLogged, setUserLogged] = useContext(UserContext);

    return (
        <div className="" style={{border: '1px solid red'}}>
        <nav className="navbar fixed-top  navbar-expand-lg " style={{backgroundColor:'#5664D2'}}>
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#"> EAGLE COURIER EXPRESS </a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto ">
                       
                        <li className="nav-item mr-4">
                            <a className="nav-link text-light" href="#">About</a>
                        </li>
                        <li className="nav-item mr-4">
                            <a className="nav-link text-light" href="#"> {userLogged.name} </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    );
};

export default AdminNavbar;