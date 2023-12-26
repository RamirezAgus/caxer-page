import image1 from '../assets/img/caxer-soluciones.png'
import image2 from '../assets/img/back-main.png'
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'


export default function Main() {

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const texts = [
        {
            title: '¿Que Soluciones te damos?',
            description: 'Consultoria - Big Data: Una nueva generación de tecnologías y arquitecturas diseñadas para extraer valor económico de grandes volúmenes de datos heterogéneos (estructurados y no estructurados), habilitando una captura, identificación y/o análisis a alta velocidad.'
        },
        {
            title: 'Administración y monitoreo de dispositivos',
            description: 'Herramientas que permiten el control remoto de niveles de suministros, contadores, alertas de servicio, reportes de todas las impresoras y MFP instaladas en red.'
        },
        {
            title: 'Adnimistración de gestion de usuarios: Contabilidad y Accesos',
            description: 'El Software de gestión de impresión ayuda a las empresas a obtener el control y la gestión de su impresión para reducir costos, aumentar la seguridad de los documentos y permitir los programas de sustentabilidad.'
        },
        {
            title: 'Digitalización y Captura inteligente de Documentos',
            description: 'La digitalización permite convertir documentos físicos (papel) en un documento digital por medio de scanner, equipos multifunción y dispositivos móviles (celulares, pads, etc). La captura inteligente de datos permite extraer información estructurada de los documentos, ya sea en papel (para digitalizar), o bien en formato digital para automatizar procesos.'
        },
        {
            title: 'Gestor Documental y Workflow',
            description: 'Captura, administra, comparte y visualiza cualquier tipo de documentos, ya sea documentos escaneados, documentos electrónicos (texto, planillas, presentaciones), documentos PDF, páginas web, correos electrónicos y todo aquél documento importante para la organización y generar múltiples flujos de trabajo.'
        }
    ];


    const intervalDuration = 4000;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, intervalDuration);

        return () => clearInterval(interval);
    }, [texts.length]);

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <section className="grid grid-cols-2 gap-4 md:container-lg bg-cyan-600 w-screen h-screen">
            <div className='flex justify-center relative items-center'>
                <div data-aos="fade-right" className='flex flex-col relative z-10  pb-4'>
                    <img src={image1} className='p-10 w-full md:w-[28rem] h-auto object-cover' alt="" />
    </div>
                <div className='flex flex-col absolute right-20 top-5 pb-4'>
                    <img src={image2} className='p-10 w-full md:w-[28rem] h-auto object-cover' alt="" />
                </div>
            </div>

            <div className='flex flex-col w-full items-center text-black'>
                <div className='flex flex-col items-center text-black'>
                    <h2 className={`font-bold text-3xl text-center pb-4 `}>{texts[currentTextIndex].title}</h2>
                    <p className={`text-lg text-center`}>{texts[currentTextIndex].description}</p>
                </div>
            </div>
        </section>
    )
}