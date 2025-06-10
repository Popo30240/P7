import React, { useState } from 'react';

import arrow_Left from '../../assets/icones/arrow_left.png';
import arrow_Right from '../../assets/icones/arrow_right.png';

import './SlideShow.scss';

function SlideShow(pictures) {
    // On utilise useState pour gérer l'index de l'image actuelle
    // currentIndex est l'état qui stocke l'index de l'image actuelle
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // Cette fonction permet de passer à l'image suivante
    // Si on est à la dernière image, on revient à la première grâce à l'opérateur modulo
    // Et setCurrentIndex est une fonction qui met à jour l'état currentIndex
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.pictures.length);
    };
    
    // Cette fonction permet de revenir à l'image précédente
    // Si l'index est à 0, on fait la taille du tableau - 1
    // Sinon on décrémente l'index de 1
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