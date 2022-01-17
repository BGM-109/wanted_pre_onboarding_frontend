import React, { useState, useEffect } from 'react';
import ImageSliderArrow from './ImageSliderArrow'

const ImageSlider = ({ 
    slides = [],
    autoPlay = true,
    autoPlayTime = 4000,
}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    useEffect(() => {
        const timer = setTimeout(() => {
            if (current === length - 1) {
                setCurrent(0);
            } else {
                setCurrent(current + 1);
            }
        }, autoPlayTime)

        return () => clearTimeout(timer)
    }, [current]);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <>
        <div className="relative h-80 my-4 py-2 flex items-center justify-center" id="ImageSlider">
            
            <div  
                className="relative flex items-center slide w-full max-w-screen-lg h-full shrink-0 bg-center bg-cover mx-5 rounded-md transition-all ease-in-out duration-700 brightness-50"
                style={current === 0  ? {backgroundImage: `url(${slides[length - 1].imageUrl})`} : {backgroundImage: `url(${slides[current - 1].imageUrl})`}}
                >
                    <ImageSliderArrow isLeft={true} onClick={prevSlide}/>
            </div>
            <div  
                className="relative slide w-full max-w-screen-lg h-full shrink-0 bg-center bg-cover mx-1 rounded-md transition-all ease-in-out duration-700 cursor-pointer"
                style={{backgroundImage: `url(${slides[current].imageUrl})`}}
                >
                <div className="flex flex-col absolute bottom-5 left-5 bg-white w-1/3 rounded-md cursor-default">
                    <div className="border-b-[1px] px-5 py-5 w-full">
                        <p className="text-xl font-bold pb-1">{slides[current].title}</p>
                        <p className="text-sm">{slides[current].subTitle}</p>
                    </div>
                    <p className="px-5 py-4 text-sm font-semibold text-blue-500 cursor-pointer">바로가기 ></p>
                </div>
            </div>
            <div  
                className="relative flex items-center slide w-full max-w-screen-lg h-full shrink-0 bg-center bg-cover mx-5 rounded-md transition-all ease-in-out duration-700 brightness-50"
                style={current === length - 1 ? {backgroundImage: `url(${slides[0].imageUrl})`} : {backgroundImage: `url(${slides[current + 1].imageUrl})`}}
                >
                    <ImageSliderArrow isLeft={false} onClick={nextSlide} />
            </div>
            
        </div>
        </>
        
    );
};

export default ImageSlider;