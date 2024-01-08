import image1 from '../assets/img/caxer-fondo-soluciones.jpg'
import image2 from '../assets/img/monitoreo.png'
import image3 from '../assets/img/consultoria.png'
import image4 from '../assets/img/contabilidad-accesos.png'
import image5 from '../assets/img/workflow.png'
import { MdOutlineMonitor } from "react-icons/md";
import { FaCog } from "react-icons/fa";
import { FaPrint } from "react-icons/fa6";
import { FaUnlock } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { IoIosDocument } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { FaBriefcase } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Soluciones() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className="container-lg">
            <div className="w-full">
                <div className="relative">
                    <img src={image1} alt='soluciones' className='w-full' />
                    <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white md:text-4xl font-medium tracking-wide'>
                        <h1>Soluciones</h1>
                    </div>
                </div>
                <h2 className='flex items-center justify-center text-gray-500 text-3xl my-12 font-medium tracking-wide'>Administración y Monitoreo de Dispositivos</h2>
                <div className='container p-8 mx-auto mb-10'>
                    <div className='container md:grid-cols-1 grid lg:grid-cols-2 md:container-lg gap-8 justify-items-center'>
                        <img data-aos="fade-right" src={image2} alt='monitoreo' className='w-80 shadow-[20px_20px_rgba(3,124,243,0.73)]' />
                        <div className='flex items-center px-4'>
                            <p data-aos="zoom-in" className='text-center text-base leading-7 text-cyan-500 font-medium my-5'>
                                Herramientas que permiten el control remoto de niveles de suministros, contadores,
                                alertas de servicio, reportes de todas las impresoras y MFP instaladas en red.
                            </p>
                        </div>
                    </div>
                </div>
                <h3 className='text-center text-gray-500 text-3xl my-6 tracking-wide'>¿Qué se hace cuando se Digitaliza?</h3>
                <div className='container-lg flex justify-center p-4 my-10 '>
                    <div className='flex flex-col flex-wrap w-fit'>
                        <div
                            data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-easing="ease-in-sine"
                            className='flex flex-wrap flex-row my-2 items-center'>
                            <MdOutlineMonitor size='4rem' className='text-cyan-500' />
                            <h3 className='p-2 text-2xl font-bold text-cyan-500'>Captura:</h3>
                            <p className='list-disc font-normal leading-6 p-3 text-gray-500 transition-transform transition-font hover:scale-105 hover:font-medium'>De manera manual, o automática, desde un scanner, multifunción, email, unidades de red y web.</p>
                        </div>
                        <div
                            data-aos="fade-right"
                            data-aos-delay="100"
                            data-aos-easing="ease-in-sine"
                            className='flex flex-wrap flex-row my-6 items-center'>
                            <FaCog size='4rem' className='text-cyan-500' />
                            <h3 className='p-2 text-2xl font-bold text-cyan-500'>Procesa:</h3>
                            <p className='list-disc font-normal leading-6 p-3 text-gray-500 transition-transform transition-font hover:scale-105 hover:font-medium'>Mejora de imagen, reconocimiento de caracteres (OCR) y codigos de barras, cambio de formatos de archivos.</p>
                        </div>
                        <div
                            data-aos="fade-right"
                            data-aos-delay="150"
                            data-aos-easing="ease-in-sine"
                            className='flex flex-wrap flex-row my-6 items-center'>
                            <FaPrint size='4rem' className='text-cyan-500' />
                            <h3 className='p-2 text-2xl font-bold text-cyan-500'>Enruta:</h3>
                            <p className='list-disc font-normal leading-6 p-3 text-gray-500 transition-transform transition-font hover:scale-105 hover:font-medium'>Hacia carpetas compartidas, impresoras, email, y a la mayoría de los ECM del mercado.</p>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-400 md:w-2/3 w-full flex items-center justify-center mx-auto" />
                <h2 className='flex items-center justify-center text-gray-500 text-3xl my-12 font-medium tracking-wide'>Administración y Gestión de Usuarios: Contabilidad y Accesos</h2>
                <div className='container p-8 mx-auto mb-10'>
                    <div className='container md:grid-cols-1 grid lg:grid-cols-2 md:container-lg gap-8 justify-items-center'>
                        <img data-aos="fade-right" src={image3} alt='monitoreo' className='w-80 shadow-[20px_20px_rgba(3,124,243,0.73)]' />
                        <div className='flex items-center px-4'>
                            <p data-aos="zoom-in" className='text-center text-base leading-7 text-cyan-500 font-medium my-5'>
                                El Software de gestión de impresión ayuda a las empresas a obtener el control y la gestión de su impresión
                                para reducir costos, aumentar la seguridad de los documentos y permitir los programas de sustentabilidad.
                            </p>
                        </div>
                    </div>
                </div>
                <h3 className='text-center text-gray-500 text-3xl my-6 tracking-wide'>¿Para qué sirven la contabilidad y el control de accesos?</h3>
                <div className='container-lg flex justify-center p-4 my-10 '>
                    <div className='flex flex-col flex-wrap w-2/3'>
                        <div
                            data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-easing="ease-in-sine"
                            className='flex flex-wrap flex-row my-2 items-center'>
                            <FaUnlock size='4rem' className='text-cyan-500' />
                            <h3 className='p-2 text-2xl font-bold text-cyan-500'>Accesos:</h3>
                            <p className='text-sm list-disc font-normal leading-6 p-3 text-gray-500 transition-transform transition-font hover:scale-105 hover:font-medium'>Permite controlar quién tiene acceso al dispositivo, y de qué manera puede utilizarlo cada usuario (sólo blanco y negro, con máximo de 100 copias color, por ejemplo).</p>
                        </div>
                        <div
                            data-aos="fade-right"
                            data-aos-delay="100"
                            data-aos-easing="ease-in-sine"
                            className='flex flex-wrap flex-row my-6 items-center'>
                            <FaChartLine size='4rem' className='text-cyan-500' />
                            <h3 className='p-2 text-2xl font-bold text-cyan-500'>Reportes:</h3>
                            <p className='text-sm list-disc font-normal leading-6 p-3 text-gray-500 transition-transform transition-font hover:scale-105 hover:font-medium'>Muestra diversidad de reportes con los gastos asociados a usuarios, departamentos, proyectos, etc.</p>
                        </div>
                        <div
                            data-aos="fade-right"
                            data-aos-delay="150"
                            data-aos-easing="ease-in-sine"
                            className='flex flex-wrap flex-row my-6 items-center'>
                            <MdOutlinePhoneIphone size='4rem' className='text-cyan-500' />
                            <h3 className='p-2 text-2xl font-bold text-cyan-500'>Folow you:</h3>
                            <p className='text-sm list-disc font-normal leading-6 p-3 text-gray-500 transition-transform transition-font hover:scale-105 hover:font-medium'>Bajo el concepto “Follow you” las impresiones se liberan sólo a pedido del usuario, en cualquier dispositivo de la empresa.</p>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-400 md:w-2/3 w-full flex items-center justify-center mx-auto" />
                <h2 className='flex items-center justify-center text-gray-500 text-3xl my-12 font-medium tracking-wide'>Gestor Documental y Workflow</h2>
                <div className='container p-8 mx-auto mb-10'>
                    <div className='container md:grid-cols-1 grid lg:grid-cols-2 md:container-lg gap-8 justify-items-center'>
                        <img data-aos="fade-right" src={image4} alt='monitoreo' className='w-80 shadow-[20px_20px_rgba(3,124,243,0.73)]' />
                        <div className='flex items-center px-4'>
                            <p data-aos="zoom-in" className='text-center text-base leading-7 text-cyan-500 font-medium my-5'>
                                Captura, administra, comparte y visualiza cualquier tipo de documentos, ya sea documentos escaneados,
                                documentos electrónicos (texto, planillas, presentaciones), documentos PDF, páginas web, correos electrónicos y
                                todo aquél documento importante para la organización y generar múltiples flujos de trabajo.
                            </p>
                        </div>
                    </div>
                </div>
                <h3 className='text-center text-gray-500 text-3xl my-6 tracking-wide'>¿Qué hace un Gestor documental?</h3>
                <div className='container-lg flex justify-center p-4 my-10 '>
                    <div className='flex flex-col flex-wrap w-fit'>
                        <div
                            data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-easing="ease-in-sine"
                            className='flex flex-wrap flex-row my-2 items-center'>
                            <IoIosDocument size='4rem' className='text-cyan-500' />
                            <h3 className='p-2 text-2xl font-bold text-cyan-500'>Administra:</h3>
                            <p className='list-disc font-normal leading-6 p-3 text-gray-500 transition-transform transition-font hover:scale-105 hover:font-medium'>De manera manual, o automática, desde un scanner, multifunción, email, unidades de red y web.</p>
                        </div>
                        <div
                            data-aos="fade-right"
                            data-aos-delay="100"
                            data-aos-easing="ease-in-sine"
                            className='flex flex-wrap flex-row my-6 items-center'>
                            <FaSearch size='4rem' className='text-cyan-500' />
                            <h3 className='p-2 text-2xl font-bold text-cyan-500'>Contenidos:</h3>
                            <p className='list-disc font-normal leading-6 p-3 text-gray-500 transition-transform transition-font hover:scale-105 hover:font-medium'>Mejora de imagen, reconocimiento de caracteres (OCR) y codigos de barras, cambio de formatos de archivos.</p>
                        </div>
                        <div
                            data-aos="fade-right"
                            data-aos-delay="150"
                            data-aos-easing="ease-in-sine"
                            className='flex flex-wrap flex-row my-6 items-center'>
                            <FiRefreshCw size='4rem' className='text-cyan-500' />
                            <h3 className='p-2 text-2xl font-bold text-cyan-500'>Versionado:</h3>
                            <p className='list-disc font-normal leading-6 p-3 text-gray-500 transition-transform transition-font hover:scale-105 hover:font-medium'>Hacia carpetas compartidas, impresoras, email, y a la mayoría de los ECM del mercado.</p>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-400 md:w-2/3 w-full flex items-center justify-center mx-auto" />
                <h2 className='flex items-center justify-center text-gray-500 text-3xl my-12 font-medium tracking-wide'>Consultoría – Big Data</h2>
                <div className='container p-8 mx-auto mb-10'>
                    <div className='container md:grid-cols-1 grid lg:grid-cols-2 md:container-lg gap-8 justify-items-center'>
                        <img data-aos="fade-right" src={image5} alt='monitoreo' className='w-80 shadow-[20px_20px_rgba(3,124,243,0.73)]' />
                        <div className='flex items-center px-4'>
                            <p data-aos="zoom-in" className='text-center text-base leading-7 text-cyan-500 font-medium my-5'>
                                Una nueva generación de tecnologías y arquitecturas diseñadas para extraer valor económico de grandes
                                volúmenes de datos heterogéneos (estructurados y no estructurados), habilitando una captura, identificación y/o análisis a alta velocidad.
                            </p>
                        </div>
                    </div>
                </div>
                <h3 className='text-center text-gray-500 text-3xl my-6 tracking-wide'>Consultoría y Outsourcing</h3>
                <div className='container-lg flex justify-center p-4 my-10 '>
                    <div className='flex flex-col flex-wrap w-2/3'>
                        <div
                            data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-easing="ease-in-sine"
                            className='flex flex-wrap flex-row my-2 items-center'>
                            <FaBriefcase size='4rem' className='text-cyan-500' />
                            <h3 className='p-2 text-2xl font-bold text-cyan-500'>Consultoría:</h3>
                            <p className='text-sm list-disc font-normal leading-6 p-3 text-gray-500 transition-transform transition-font hover:scale-105 hover:font-medium'>
                                Nuestros profesionales están capacitados para participar de reuniones, tanto comerciles como técnicas, hacer un posterior relevamiento del lugar
                                detectando sectores y aplicaciones críticas y, en base a la información recaudada, diseñar la arquitectura de la solución.
                                Estos procedimientos están normalizados con documentación que justifica el accionar correspondiente.
                            </p>
                        </div>
                        <div
                            data-aos="fade-right"
                            data-aos-delay="100"
                            data-aos-easing="ease-in-sine"
                            className='flex flex-wrap flex-row my-6 items-center'>
                            <MdOutlineComputer size='4rem' className='text-cyan-500' />
                            <h3 className='p-2 text-2xl font-bold text-cyan-500'>Outsourcing:</h3>
                            <p className='text-sm list-disc font-normal leading-6 p-3 text-gray-500 transition-transform transition-font hover:scale-105 hover:font-medium'>
                                Existen dos modalidades en lo que llamamos "outsourcing". La primera, denominada "in situ", provee los
                                recursos necesarios (humanos, equipamiento, software, etc.) para llevar a cabo el proyecto en vuestra empresa.
                                La segunda, denominada "outside", el proyecto se realiza físicamente en nuestras oficinas y la información se entrega
                                según pautas en el contrato en el formato estipulado..
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}