import React, { useState, useEffect } from "react";

import imagen1 from '../assets/img/caxer-fondo1.jpg'
import imagen2 from '../assets/img/caxer-fondo2.jpg'
import imagen3 from '../assets/img/caxer-fondo3.jpg'

export default function Slider() {
  const images = [
    imagen1,
    imagen2,
    imagen3
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        {images.map((image, index) => (
            <img
                key={image}
                src={image}
                className={`w-full h-full ${
                    index === currentIndex ? 'block' : 'hidden'
                }`}/>
        ))}
      </div>
    </div>
  );
}
