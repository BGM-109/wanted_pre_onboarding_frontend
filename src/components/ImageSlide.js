import React from 'react';
import SliderCard from './SliderCard'
import ImageSliderArrow from './ImageSliderArrow'


const ImageSlide = ({ slide, isPrev, isNext, onClick }) => {
   
    return (
        <div 
            className="xl:relative xl:max-w-navwidth mx-3 w-10/12 py-5 shrink-0 flex flex-col transition-all ease-in-out duration-700"
            style={isPrev || isNext ? {filter: "brightness(.5)"} : null}
        
        >
                <div  
                    className="w-full h-[183px] xl:h-72 bg-center bg-cover rounded-md cursor-pointer"
                    style={{backgroundImage: `url(${slide.imageUrl})`}}
                    >
                            
                </div>
                {
                    isPrev ? <ImageSliderArrow isLeft={true} onClick={onClick}/>  : null
                }
                {
                    isNext ? <ImageSliderArrow isLeft={false} onClick={onClick}/> : null
                }
                
                {
                    isPrev || isNext ? <SliderCard title = {slide.title} subTitle = {slide.subTitle} isHide={true}/> : <SliderCard title = {slide.title} subTitle = {slide.subTitle} isHide={false}/>  
                }
                
                
        </div>
    );
};

export default ImageSlide;