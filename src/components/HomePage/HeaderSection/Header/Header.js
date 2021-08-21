import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import HeaderMainContent from '../HeaderMainContent/HeaderMainContent';

const Header = () => {
    return (
        <header >
            <Navbar></Navbar>
            <HeaderMainContent></HeaderMainContent>
        </header>
    );
};

export default Header;