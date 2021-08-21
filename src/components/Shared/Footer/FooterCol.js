import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        <div className="col-md-3">
            <h5 className="" style={{color:'#323EBE'}}>{props.menuTitle && props.menuTitle }</h5>
            <img src={props.companyLogo} className="w-50 pb-3" style={{width:''}} alt="" />
            <ul className="list-unstyled mt-2">
                 {
                     props.menuItems.map((item, index) => <li key={index}><Link to={item.link} className="text-secondary lh-lg">{item.name}</Link></li>)
                 }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;