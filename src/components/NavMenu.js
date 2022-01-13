import React from 'react';

const menuList = [
    "채용",
    "이벤트",
    "직군별 연봉",
    "이력서",
    "커뮤니티",
    "프리랜서",
    "AI 합격에측",
];

const NavMenu = () => {
    return (
        <div className="flex flex-row space-x-4">
            {menuList.map((menu) => (
                <p>
                    {menu}
                </p>
            ))}
        </div>
    );
};

export default NavMenu;