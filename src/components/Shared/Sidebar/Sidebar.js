import React, { useState } from 'react';
import './Sidebar.css'
import { RiMenuFoldLine } from 'react-icons/ri';
import AddNewServices from '../../Dashboard/Admin/AddNewServices/AddNewServices';
import AllServices from '../../Dashboard/Admin/AllServices/AllServices';
import AllOrderList from '../../Dashboard/Admin/AllOrderList/AllOrderList';
import { Link, Route } from 'react-router-dom';



const Sidebar = () => {
    const [toggle, setToggle] = useState(true);
    // $(document).ready(function () {
    //     $('#sidebarCollapse').on('click', function () {
    //         $('#sidebar').toggleClass('active');
    //     });
    // });





    return (
        <section>
            <div class="wrapper">
                {/* <!-- Sidebar  --> */}
                {toggle &&
                    <nav id="sidebar">
                        <div class="sidebar-header">
                            <h3>Bootstrap Sidebar</h3>
                        </div>

                        <ul class="list-unstyled components">
                            <li>
                                <Link>Dashboard</Link>
                            </li>
                            <li class="active">
                                <Link to='/allServices' data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Services Manage</Link>
                                {/* <ul class="collapse list-unstyled" id="homeSubmenu">
                                    <li>
                                        <a href="#">Home 1</a>
                                    </li>
                                    <li>
                                        <a href="#">Home 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Home 3</a>
                                    </li>
                                </ul> */}
                            </li>
                            <li>
                                <Link to="/sidebar/addNewService">Add Services </Link>
                            </li>
                            <li>
                                <Link to="" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">All Reviews </Link>
                                {/* <ul class="collapse list-unstyled" id="pageSubmenu">
                                    <li>
                                        <a href="#">Page 1</a>
                                    </li>
                                    <li>
                                        <a href="#">Page 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Page 3</a>
                                    </li>
                                </ul> */}
                            </li>
                            <li>
                                <Link to="/allOrders">Orders Manage</Link>
                            </li>
                            <li>
                                <Link>Make Admin</Link>
                            </li>
                        </ul>

                        <ul class="list-unstyled CTAs">
                            <li>
                                <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a>
                            </li>
                            <li>
                                <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a>
                            </li>
                        </ul>
                    </nav>

                }
                {/* <!-- Page Content  --> */}


                <div id="content">

                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">

                            <button type="button" id="sidebarCollapse" class="btn btn-info" onClick={() => setToggle(!toggle)}>
                                <RiMenuFoldLine></RiMenuFoldLine>
                                <span>Toggle Sidebar</span>
                            </button>
                            <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="fas fa-align-justify"></i>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="nav navbar-nav ml-auto">
                                    <li class="nav-item active">
                                        <a class="nav-link" href="#">Page</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Page</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Page</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Page</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                        <Route exact path="/allServices">
                                <AllServices></AllServices>
                        </Route>
                        <Route path="/addNewService">
                            <AddNewServices></AddNewServices>
                        </Route>
                        <Route path="/allOrders">
                            <AllOrderList></AllOrderList>
                        </Route>

                </div>

                     {/*  ===================================================================  */}


                    
            </div>
        </section>
    );
};

export default Sidebar;