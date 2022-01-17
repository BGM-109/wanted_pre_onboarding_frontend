import React from 'react';

const menuList = [
    {"title" : "채용", "noti" : ""},
    {"title" : "이벤트", "noti" : ""},
    {"title" : "연봉", "noti" : ""},
    {"title" : "이력서", "noti" : ""},
    {"title" : "커뮤니티", "noti" : "New"},
    {"title" : "프리랜서", "noti" : ""},
    {"title" : "AI 합격예측", "noti" : "Beta"},
];
const mobileMenu = [
    "홈",
    "채용",
    "이벤트"
];

const NavMenu = () => {
    return (
        <>
        <ul className="flex flex-row md:hidden w-1/2 self-start">
            {
                mobileMenu.map((menu, index) => (
                    <li className="p-2 text-sm font-bold " key={index}>
                        {menu}
                    </li>
                ))
            }
        </ul>
        <ul className="hidden md:flex md:flex-row md:basic-1/2 md:items-center">
            {menuList.map((menu, index) => (
                <li key={index} className="relative h-[50px] py-3.5 px-4  border-white text-sm font-semibold border-b-2 hover:border-gray-200 cursor-pointer">
                    {menu.title}
                    {
                        menu.noti.length > 0 ? <span className="absolute top-1.5 text-blue-500 text-[5px] font-medium">{menu.noti}</span> : null
                    }
                </li>
            ))}
        </ul>
        </>
    );
};

export default NavMenu;