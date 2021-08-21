import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import HeaderMainContent from '../HeaderMainContent/HeaderMainContent';

const Header = () => {
    return (
        <header style={{border: '1px solid red'}}>
            <Navbar></Navbar>
            <HeaderMainContent></HeaderMainContent>
        </header>
    );
};

export default Header;