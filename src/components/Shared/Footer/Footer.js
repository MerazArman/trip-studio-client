import React from 'react';
import './Footer.css';
import FooterCol from './FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import logo from '../../../images/trip-logo.PNG'

const noNamed = [
    {name: 'Head Office' , link: "/"},
    {name: "Dhaka Mirpur 10 " , link: "/"},
    {name: " shewrapara ,block-s 1208" , link: "/"},
    // {name: "Tooth Extraction" , link: "/"},
    // {name: "Check Up" , link: "/"},
]
const ourAddress = [
    {name: "Uttora - 4no sector" , link: "//google.com/map"},
    {name: "Dhaka 1265" , link: "//google.com/map"},
    {name: "Bangladesh " , link: "//google.com/map"},
   
]
const BranchList = [
    {name: " Dhaka mirpur" , link: "/"},
    {name: "Rajshahi kotwali" , link: "/"},
    {name: " Birampur dhaka-mor" , link: "/"},
    {name: "Chittagong notun-briz" , link: "/"},
    {name: "Borishal rupali" , link: "/"},
    // {name: "Check Up" , link: "/"},
    // {name: "Check Up" , link: "/"}
]
const services = [
    {name: " WEDDING CINEMATOGRAPHY" , link: "/"},
    {name: "BIRTHDAY CINEMATOGRAPHY" , link: "/"},
    {name: " NEWBORN PHOTOGRAPHY" , link: "/"},
    {name: " WEDDING Film" , link: "/"},
    {name: "ENGAGEMENT PHOTOGRAPHY" , link: "/"},
    // {name: "Check Up" , link: "/"},
    // {name: "Check Up" , link: "/"}
]



const Footer = () => {
    return (
       
        <footer className="footer-area mt-5 clear-both  footer-bg" style={{border:''}}>
            <div className="container pb-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} companyLogo={logo} menuItems={noNamed}>
                        
                    <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon fb" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon go" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon inst" icon={faInstagram} /></a></li>
                        </ul>
                     </FooterCol>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Branch List" menuItems={BranchList}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <div className="">
                            <h6>Call now</h6>
                            <button className="btn all-btn">+88012555025</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;