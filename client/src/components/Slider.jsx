import React from 'react';
import { Zoom } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import image1 from '../assets/img/slider1.jpg';
import image2 from '../assets/img/slider2.jpg';
import image3 from '../assets/img/slider3.jpg';

const images = [image1, image2, image3];

const zoomOutProperties = {
    duration: 4500,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
};

const Slideshow = () => {
    return (
        <div className='relative'>
            <div className='flex justify-between absolute '>
                <div className='  w-1/2 '>
                
             

                </div>


            </div>
            <div className="slide-container ">

                <Zoom {...zoomOutProperties}>
                    {images.map((each, index) => (
                        <img key={index} style={{ width: "100%" }} src={each} />
                    ))}

                </Zoom>
            </div>
        </div>

    );
};

function SliderComp() {
    return (
        <div className="App">
            <Slideshow />
        </div>
    );
}


export default SliderComp

