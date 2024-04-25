import { useEffect, useState } from "react";
import imagen1 from "../assets/img/caxer-fondo1.jpg";
import imagen2 from "../assets/img/caxer-fondo2.jpg";
import imagen3 from "../assets/img/caxer-fondo3.jpg";

const slides = [
  {
    image: imagen1,
    text: "Soluciones de Impresión",
    additionalText:
      "Optimice su productividad con nuestras soluciones de impresión avanzadas.",
  },
  {
    image: imagen2,
    text: "Soluciones de Administrativas",
    additionalText:
      "Potencie su empresa con nuestras soluciones administrativas, diseñadas para simplificar procesos y mejorar la eficiencia en la gestión de recursos y operaciones.",
  },
  {
    image: imagen3,
    text: "Soluciones Tecnológicas",
    additionalText:
      "Nuestras soluciones tecnológicas personalizadas brindan eficiencia y vanguardia a su empresa, desde desarrollo de software hasta servicios de infraestructura.",
  },
];

export default function Carrousel() {
  let [current, setCurrent] = useState(0);

  let nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);

    return () => clearInterval(intervalId);
  }, [current]);

  return (
    <div
      className={`flex transition ease-out duration-500 z-40`}
      style={{ transform: `translateX(-${current * 100}%)` }}
    >
      {slides.map((slide, index) => (
        <div key={index} className="w-full">
          <div className="relative">
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="max-w-none"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-4">
              <div className="bg-black bg-opacity-50 w-full h-[24rem] md:w-[42rem] md:h-[18rem] flex flex-col items-center justify-center">
                <h2 className="text-white text-3xl md:text-4xl mb-2 pt-6">
                  {slide.text}
                </h2>
                <p className="text-white text-md sm:text-lg p-6">
                  {slide.additionalText}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
