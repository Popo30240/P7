import React, { useState } from 'react';

import arrow_Left from '../../assets/icones/arrow_left.png';
import arrow_Right from '../../assets/icones/arrow_right.png';

import './SlideShow.scss';

function SlideShow(pictures) {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.pictures.length);
    };
    
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? pictures.pictures.length - 1 : prevIndex - 1
        );
    };
    
    return (
        <div className="Slideshow">
            <img className ="Slideshow__image" src={pictures.pictures[currentIndex]} alt={pictures.title} />
            <div className="Slideshow__arrows">
                <img className="Slideshow__arrow-left" src={arrow_Left} alt="Previous" onClick={handlePrev} />
                <p className="Slideshow__counter">
                    {currentIndex + 1}/{pictures.pictures.length}
                </p>
                <img className="Slideshow__arrow-right" src={arrow_Right} alt="Next" onClick={handleNext} />
            </div>
        </div>
    );

}

export default SlideShow;