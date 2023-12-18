import { useState } from 'react'
import image1 from '../assets/img/caxer-soluciones.png'
import { useEffect } from 'react';


export default function Main() {

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const texts = [
        {
            title: '¿Que Soluciones te damos?',
            subtitle: 'Consultoria - Big Data',
            description: 'Una nueva generación de tecnologías y arquitecturas diseñadas para extraer valor económico de grandes volúmenes de datos heterogéneos (estructurados y no estructurados), habilitando una captura, identificación y/o análisis a alta velocidad.'
        },
        {
            title: '¿Que Soluciones te damos?',
            subtitle: 'Consultoria - Big Data',
            description: 'Una nueva generación de tecnologías y arquitecturas diseñadas para extraer valor económico de grandes volúmenes de datos heterogéneos (estructurados y no estructurados), habilitando una captura, identificación y/o análisis a alta velocidad.'
        },
        {
            title: '¿Que Soluciones te damos?',
            subtitle: 'Consultoria - Big Data',
            description: 'Una nueva generación de tecnologías y arquitecturas diseñadas para extraer valor económico de grandes volúmenes de datos heterogéneos (estructurados y no estructurados), habilitando una captura, identificación y/o análisis a alta velocidad.'
        },
        {
            title: '¿Que Soluciones te damos?',
            subtitle: 'Consultoria - Big Data',
            description: 'Una nueva generación de tecnologías y arquitecturas diseñadas para extraer valor económico de grandes volúmenes de datos heterogéneos (estructurados y no estructurados), habilitando una captura, identificación y/o análisis a alta velocidad.'
        }
    ];

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCurrentTextIndex(currentTextIndex + 1);
        }, 3000)

        return () => clearTimeout(timeout)
    })

    return (
        <section className="flex flex-row justify-evenly items-center bg-cyan-500 w-full h-full">
            <div className='flex flex-col'>
                <div className='flex flex-col relative z-10 pb-4'>
                    <img src={image1} className='p-10 w-[28rem] h-auto object-cover' alt="" />
                </div>
                <div className='flex flex-col p-10 absolute pb-8'>
                    <div className='bg-cyan-700 mt-6 ml-4 w-[25rem] h-[32rem]'></div>
                </div>
            </div>
            <div className='flex flex-col w-96 items-center text-white'>
                <h2 className='font-bold text-3xl text-center pb-4'>¿Que soluciones te damos?</h2>
                <p className='pb-4 text-lg'>Consultoria - BigData</p>
                <p className='text-lg text-center'>Una nueva generación de tecnologías y arquitecturas diseñadas para extraer valor económico de grandes volúmenes de datos heterogéneos (estructurados y no estructurados), habilitando una captura, identificación y/o análisis a alta velocidad.</p>
            </div>
        </section>
    )
}





{/*export default function Main() {
    return (
        <section className="bg-cyan-500 w-full h-full">
            <div className=''>
                <img src={image1} className='p-10 absolute' alt="" style={{ width: '400px', height: '600px' }}/>
                <div className=''>
                    <div className='bg-cyan-700 flex flex-row' style={{ width: '400px', height: '600px' }}>

                    </div>
                </div>
            </div>
        </section>
    )
}*/}