import React from 'react';
import menu from '../images/icon-menu.png';
import logo from '../images/brand.png';

const NavBrand = () => {
    return (
        <div className="w-full py-4 px-5 flex flex-row items-center lg:w-fit h-[60px] lg:h-[50px] lg:px-0">
            <img src={menu} alt="menu" className="w-4.5 h-3.5 cursor-pointer"/>
            <img src={logo} alt="logo" className="cursor-pointer"/>
        </div >
    );
};

export default NavBrand;