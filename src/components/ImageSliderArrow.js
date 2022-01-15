import React from 'react';

const ImageSliderArrow = ({ isLeft, onClick }) => {
    return (
        <>
                {
                    isLeft 
                    ?  <button className="bg-white/70 px-1.5 py-5 rounded-3xl absolute right-5" onClick = {onClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>  
                    :   
                    <button className="bg-white/70 px-1.5 py-5 rounded-3xl absolute left-5" onClick = {onClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                }
        </>
    );
};

export default ImageSliderArrow;