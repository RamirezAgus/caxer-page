import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import image1 from '../assets/img/caxer-servicios.png';
import image2 from '../assets/img/serviceImg.png';

import SectionSolution from '../components/sectionSolution';


export default function Servicios() {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className='container-lg'>
            <div className='w-full'>
                <div className="relative">
                    <img src={image1} alt='servicios' className='w-full' />
                    <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white text-3xl md:text-4xl font-medium tracking-wide'>
                        <h1>Servicios</h1>
                    </div>
                </div>
                <SectionSolution
                    title='Mantenimientos Preventivos y Periódicos'
                    image={image2}
                    description='Los servicios de mantenimiento preventivo están dirigidos a empresas u oficinas que requieren que sus Impresoras y Equipos 
                    Multifuncionales nunca se detengan. Estos servicios ayudan a evitar los problemas comunes de los equipos, gestionando el desgaste y 
                    garantizando un funcionamiento continuo. Se ofrecen con la frecuencia y el nivel de uso que requiera el cliente, con atención personalizada 
                    y de calidad en Capital Federal y Gran Buenos Aires.'/>
            </div>
        </section>
    )
}