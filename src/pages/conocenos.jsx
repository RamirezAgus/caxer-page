import image1 from '../assets/img/caxer-fondo-quienes-somos.jpg'
import image2 from '../assets/img/caxer-conocenos.png'
import image3 from '../assets/img/caxer-conocenos2.png'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Conocenos() {

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <section className="constainer-lg">
            <div className="w-full">
                <div className="relative">
                    <img src={image1} alt='quienes-somos' className='w-full' />
                    <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white md:text-4xl font-medium tracking-wide'>
                        <h1>Quienes somos</h1>
                    </div>
                </div>
                <div className='container p-10 mx-auto'>
                    <div className='container md:grid-cols-1 mx-auto grid lg:grid-cols-2 md:container-lg gap-10 mb-12'>
                        <img data-aos="fade-right" src={image2} alt="Imagen 2" className="w-full shadow-[20px_20px_rgba(0,0,0,.15)]" />
                        <div className='flex items-center'>
                            <p data-aos="fade-zoom-in" className='text-center text-base leading-7 text-cyan-500 font-medium my-5'>
                                Somos una compañía con más de quince años en el mercado argentino,
                                ofreciendo Servicios de Impresión y copiado a muchas de las grandes
                                empresas del país. Quienes ocupan los cargos en la gerencia comercial,
                                son personas idóneas con amplia trayectoria en el manejo de procesos
                                integrales de documentos.
                            </p>
                        </div>
                    </div>
                    <div className='container md:grid-cols-1 mx-auto grid lg:grid-cols-2 md:container-lg gap-10 mb-8'>
                        <div className='flex items-center sm:order-last'>
                            <p data-aos="fade-zoom-in" className='text-center text-base leading-7 text-cyan-500 font-medium my-5'>Nuestros ingenieros participan del relevamiento en forma proactiva,
                                para luego diseñar una solución personalizada que cubra los requerimientos
                                específicos de la cuenta. Esto constituye el núcleo central en el que se
                                concentra nuestra actividad comercial para la venta completa de soluciones
                                que contribuyen a la optimización de los procesos de negocio de nuestro cliente.
                            </p>
                        </div>
                        <div className='flex justify-center order-first lg:order-last'>
                            <img data-aos="fade-left" src={image3} alt="Imagen 2" className="w-80 shadow-[20px_20px_rgba(0,0,0,.15)]" />
                        </div>
                    </div>
                </div>
                <div className='container-lg flex flex-col pt-5 mx-10 mb-10'>
                    <div className='flex'>
                        <p data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="100"
                            data-aos-offset="0" className='text-lg leading-6 text-center text-gray-500 font-normal mb-4'>La propuesta de CAXER se enfoca siempre bajo el concepto más amplio del MPS o Servicio de impresión gestionado:</p>
                    </div>
                    <ul className='list-disc font-light leading-6 p-4 text-gray-500'>
                        <li className='transition-transform transition-font hover:scale-105 hover:font-normal'>Servicio de impresión con MFP con tecnología de avanzada.</li>
                        <li className='transition-transform transition-font hover:scale-105 hover:font-normal'>Servicio de impresión que incluyen monitoreo constante de niveles de suministros de cada equipo que permitan al cliente desentenderse de la gestión de los insumos, siendo el proveedor único responsable.</li>
                        <li className='transition-transform transition-font hover:scale-105 hover:font-normal'>Servicio de impresión que incluyen un monitoreo de contadores y reportes semanales y/o mensuales que permitan una facturación en tiempo y forma de las impresiones realizadas.</li>
                        <li className='transition-transform transition-font hover:scale-105 hover:font-normal'> Servicio de impresión que incluyen alertas automáticas de fallas técnicas y cambios de Toner.</li>
                        <li className='transition-transform transition-font hover:scale-105 hover:font-normal'>Servicio que permiten definir reglas y políticas de impresión, controles de accesos y permisos, centros de costos y los conceptos de pullprinting y mobileprinting.</li>
                        <li className='transition-transform transition-font hover:scale-105 hover:font-normal'>Servicio que incluyen permita la digitalización de las aplicaciones más importantes del cliente en forma centralizada o descentralizadas utilizando software de captura inteligente OCR y QR y scanners MFP de tecnología de punta.</li>
                        <li className='transition-transform transition-font hover:scale-105 hover:font-normal'>Servicio que permiten que los documentos digitalizados puedan ser almacenados en un gestor documental para luego compartir en forma rápida la información.</li>
                        <li className='transition-transform transition-font hover:scale-105 hover:font-normal'> Finalmente, un servicio que permita convertir procesos manuales en procesos de workflow para mejorar la productividad de los usuarios.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}