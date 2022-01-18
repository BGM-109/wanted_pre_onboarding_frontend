import React, { useState, useEffect } from 'react';
import ImageSlide from './ImageSlide'

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
        <div className="relative flex items-center justify-center" id="ImageSlider">
           
            <ImageSlide slide={ current === 0 ? slides[length - 1] : slides[current - 1]} isPrev={true} onClick={prevSlide}/>

            <ImageSlide slide={slides[current]} isArrow={false}/>
            
            <ImageSlide slide={ current === length - 1 ? slides[0] : slides[current + 1]}  isNext={true} onClick={nextSlide}/>
     
        </div>
    );
};

export default ImageSlider;