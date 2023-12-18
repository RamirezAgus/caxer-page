import { useEffect, useState } from "react"
import imagen1 from '../assets/img/caxer-fondo1.jpg'
import imagen2 from '../assets/img/caxer-fondo2.jpg'
import imagen3 from '../assets/img/caxer-fondo3.jpg'


/*const slides = [
    { image: imagen1, text: 'Soluciones de Impresión' },
    { image: imagen2, text: 'Soluciones de Administrativas' },
    { image: imagen3, text: 'Soluciones Tecnológicas' }
]*/
const slides = [
    { image: imagen1, text: 'Soluciones de Impresión', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' },
    { image: imagen2, text: 'Soluciones de Administrativas', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' },
    { image: imagen3, text: 'Soluciones Tecnológicas', additionalText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' }
]

export default function Carrousel() {

    let [current, setCurrent] = useState(0)

    let nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length)
    }

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 2000);

        return () => clearInterval(intervalId);
    }, [current])

    return (
        <div className={`flex transition ease-out duration-500`} style={{ transform: `translateX(-${current * 100}%)` }}>
            {slides.map((slide, index) => (
                <div key={index} className="w-full">
                    <div className="relative">
                        <img src={slide.image} alt={`Slide ${index}`} className="max-w-none" />
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                            <h2 className="text-white text-2xl mb-2">{slide.text}</h2>
                            <p className="text-white text-lg">{slide.additionalText}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

/*{slides.map((s, index) => {
    return <img key={index} src={s} alt={`Slide ${index}`}/>
})}*/

/*
{slides.map((slide, index) => (
                    <div key={index} className="">
                    <img src={slide.image} alt={`Slide ${index + 1}`} className="" />
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                      <p className="text-white text-2xl">{slide.text}</p>
                </div>
                </div>
                ))} */