import React from 'react';
import menu from '../images/icon-menu.png';
import logo from '../images/brand.png';

const NavBrand = () => {
    return (
        <div className="flex flex-row items-center justify-center">
            <img src={menu} alt="menu" className="w-4.5 h-3.5 cursor-pointer"/>
            <img src={logo} alt="logo" className="cursor-pointer"/>
        </div >
    );
};

export default NavBrand;