import React from 'react';

const menuList = [
    "채용",
    "이벤트",
    "직군별 연봉",
    "이력서",
    "커뮤니티",
    "프리랜서",
    "AI 합격예측",
];

const NavMenu = () => {
    return (
        <ul className="flex flex-row basic-1/2">
            {menuList.map((menu) => (
                <li className="py-3 px-4 border-white text-sm font-semibold border-b-2 hover:border-gray-200">
                    {menu}
                </li>
            ))}
        </ul>
    );
};

export default NavMenu;