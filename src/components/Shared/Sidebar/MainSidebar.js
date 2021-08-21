import React, {useContext, useEffect, useState} from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";
import {FaList, FaRegHeart, FaShoppingCart} from "react-icons/fa";
import {FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle} from "react-icons/fi";
import {RiPencilLine} from "react-icons/ri";
import {BiCog} from "react-icons/bi";
import {MdRateReview} from "react-icons/md";
import {GoSettings} from "react-icons/go";
import {AiOutlineAppstoreAdd, AiOutlineUsergroupAdd, AiTwotoneShopping} from "react-icons/ai"
//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./mainSidebar.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import logo1 from '../../../images/eagle-1.PNG'





const MainSidebar = () => {
  
  const [userLogged, setUserLogged] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)

  // create a custom function that will change menucollapse state from false to
  // true and true to false
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  useEffect(() => {
    fetch('https://calm-hollows-51020.herokuapp.com/isAdmin', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: userLogged.email })
    })
        .then(res => res.json())
        .then(data => setIsAdmin(data));
}, [])


  return ( 
     <div id="header">
    {/* collapsed props to change menu size using menucollapse state */}
    <ProSidebar collapsed={menuCollapse}>
      <SidebarHeader>
        <div className="">
          {/* small and big change using menucollapse state */}
          {/* <p className="">{menuCollapse
              ? "Logo"
              : "Big Logo"}</p> */}
              <img src={logo1} className="w-75" style={{width:''}} alt="" />
        </div>
        <div className="closemenu" onClick={menuIconClick}>
          {/* changing menu collapse icon on click */}
          {menuCollapse
            ? (<FiArrowRightCircle/>)
            : (<FiArrowLeftCircle/>)}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem  icon={< FiHome />}>
            <Link to="/"  className="item-text"> Home</Link>
          </MenuItem>
         {
           isAdmin && 
           <div>
              <MenuItem icon={< FaList />}>
            <Link to="/allServices"  className="item-text">Services List </Link>
          </MenuItem>
          <MenuItem icon={< GoSettings />}>
            <Link to="/allOrderList"  className="item-text">Orders List</Link>
          </MenuItem>
          <MenuItem icon={< AiOutlineUsergroupAdd />}>
            <Link to="/makeAdmin"  className="item-text">Add Admin</Link>
          </MenuItem>
          <MenuItem icon={< AiOutlineAppstoreAdd />}>
            <Link to="/addNewService"  className="item-text"> Add Service</Link>
          </MenuItem>
          <MenuItem active={true} icon={< BiCog />}>
          <Link to="/allServices" className="item-text">  Settings </Link>
        </MenuItem>
           </div>
         }
            <MenuItem icon={< FaShoppingCart />}>
            <Link to="/shortOrderList"  className="item-text">Bookings</Link>
          </MenuItem>
          <MenuItem icon={< MdRateReview/>}>
            <Link to="/addNewReview"  className="item-text">Review</Link>
          </MenuItem>
         
        </Menu>
        <SidebarFooter>
        <Menu iconShape="square">
          <MenuItem icon={< FiLogOut />}  onClick={() => setUserLogged({})}>Logout</MenuItem>
        </Menu>
      </SidebarFooter>
      </SidebarContent>
     
    </ProSidebar>
  </div> 
  );
};

export default MainSidebar;