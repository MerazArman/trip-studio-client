import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/trip-logo.PNG'
const Navbar = () => {


    const [userLogged, setUserLogged] = useContext(UserContext)


    return (
        <div className="" style={{border: '1px solid red', marginBottom:'14%'}}>
            <nav className="navbar fixed-top navbar-expand-lg  navbar-light bg-light " >
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#"> Navbar </a> */}
                    <img src={logo} className="navbar-brand" style={{width:'18%'}} alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item mr-4">
                                <Link className="nav-link active" aria-current="page" to="/"> Home</Link>
                               
                            </li>
                            <li className="nav-item mr-4">
                                <a className="nav-link" href="#service">Service</a>
                            </li>

                            <li className="nav-item mr-4">
                                <Link className="nav-link" to="/checkoutForm23"> Gallery </Link>
                            </li>
                            <li className="nav-item mr-4">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item mr-4">
                            <Link className="nav-link" to="/"> Admin </Link>
                            </li>
                            
                            <li className="nav-item mr-4">
                                <a className="nav-link" href="#hh"> {userLogged.name} </a>
                            </li>
                            <li className="nav-item mr-4">
                                {
                                    userLogged.success? 
                                    <button className="btn btn-sign"  onClick={() => setUserLogged({})}> Logout</button>
                                    :
                                    <Link to="/loginPage">
                                    <button className="btn btn-sign ">Login</button>
                                     </Link>
                                }
                             

                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;