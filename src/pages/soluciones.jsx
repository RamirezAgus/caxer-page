import image1 from '../assets/img/caxer-fondo-soluciones.jpg'


export default function Soluciones(){
    return(
        <section className="container-lg">
            <div className="w-full">
                <div className="relative">
                    <img src={image1} alt='soluciones' className='w-full'/>
                    <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white md:text-4xl font-medium tracking-wide'>
                        <h1>Soluciones</h1>
                    </div>
                </div>
                <div>
                    <h2>Administración y Monitoreo de Dispositivos</h2>
                    <p>Herramientas que permiten el control remoto de niveles de suministros, contadores, 
                    alertas de servicio, reportes de todas las impresoras y MFP instaladas en red.</p>
                    <h3>¿Qué se hace cuando se Digitaliza?</h3>
                    <ul>
                        <li>De manera manual, o automática, desde un scanner, multifunción, email, unidades de red y web.</li>
                        <li>Mejora de imagen, reconocimiento de caracteres (OCR) y codigos de barras, cambio de formatos de archivos.</li>
                        <li>Hacia carpetas compartidas, impresoras, email, y a la mayoría de los ECM del mercado.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}