import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import imagen1 from "../assets/img/caxer-fondo1.webp";
import imagen2 from "../assets/img/caxer-fondo2.webp";
import imagen3 from "../assets/img/caxer-fondo3.webp";

const slides = [
  {
    image: imagen1,
    text: "Soluciones de Impresión",
    additionalText:
      "Optimice su productividad con nuestras soluciones de impresión avanzadas.",
  },
  {
    image: imagen2,
    text: "Soluciones Administrativas",
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
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex z-30">
      <AnimatePresence>
        {slides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={index}
                className="w-full"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
              >
                <div className="w-full">
                  <div className="relative">
                    <img
                      src={slide.image}
                      alt={`Slide ${index}`}
                      className="max-w-none object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center text-center justify-center p-4">
                      <h2 className="text-white text-3xl md:text-4xl mb-2">
                        {slide.text}
                      </h2>
                      <p className="text-white text-md sm:text-lg px-4">
                        {slide.additionalText}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
}
