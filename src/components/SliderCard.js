import React from 'react';

const SliderCard = ({ title, subTitle, isHide }) => {
    return (
        <>
        <div className="w-full text-center xl:hidden p-5">
            <p className="text-lg font-bold ">{title}</p>
            <p className="text-xs">{subTitle}</p>
            <div className="flex items-center justify-center text-blue-500">
                <p className="py-2 text-sm font-semibold  cursor-pointer">바로가기   </p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div> 
        </div>
        {
            isHide ? null : <div className="hidden xl:flex absolute left-5 flex flex-col bottom-10 bg-white w-1/3 rounded-md cursor-default">
            <div className="border-b-[1px] px-5 py-5 w-full">
                <p className="text-xl font-bold pb-1">{title}</p>
                <p className="text-sm">{subTitle}</p>
            </div>
                <p className="flex items-center px-5 py-4 text-sm font-semibold text-blue-500 cursor-pointer">바로가기 
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </p>
        </div>
        }
        
        </>
        
    );
};

export default SliderCard;