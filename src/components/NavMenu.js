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

const NavMenu = () => {
    return (
        <ul className="flex flex-row basic-1/2">
            {menuList.map((menu, index) => (
                <li key={index} className="relative py-3 px-4 border-white text-sm font-semibold border-b-2 hover:border-gray-200 cursor-pointer">
                    {menu.title}
                    {
                        menu.noti.length > 0 ? <span className="absolute top-1.5 text-blue-500 text-[5px] font-medium ">{menu.noti}</span> : null
                    }
                </li>
            ))}
        </ul>
    );
};

export default NavMenu;