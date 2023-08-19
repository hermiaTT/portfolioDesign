import { Flex, IconButton, Image, Radio } from "@chakra-ui/react";
import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { arrow_left, arrow_right } from "../../assets/imports";

const ImageSlider = ({ bg, slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    const moveDot = index => {
        setCurrent(index);
    };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Flex className='image_slider-wrapper' bg ={bg}>
      {slides.map((slide, index) => {
          return (
                
                    index === current && (
                        <Image className={index === current ? 'slide active' : 'slide'} key={index} src={slide} alt='image' />
                    )
               
          
            );
        })}
        <Flex className="image_slider-btn">
            <IconButton icon={<Image src= {arrow_left}/>} className='left-arrow' onClick={prevSlide} />
            <Flex className="image_slider_dot-control">
            {   
                slides.map((slide,index)=>{
                    return(
                        <div 
                        onClick={() => moveDot(index )}
                            className={current === index ? "dot active" : "dot"}/>
                    )
                })
            }
            </Flex>
            <IconButton icon={<Image src={arrow_right}/>} className='right-arrow' onClick={nextSlide} />
        </Flex>
    </Flex>
  );
};

export default ImageSlider;