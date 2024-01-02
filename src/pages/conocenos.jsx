import image1 from '../assets/img/caxer-fondo-quienes-somos.jpg'

export default function Conocenos() {
    return (
        <section className="container flex">
            <div className="w-full">
                <div className="relative">
                    <img src={image1} alt='quienes-somos' className='max-w-none'/>
                    <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white'>
                        <h1>Quienes somos</h1>
                    </div>
                    <div className='flex'>
                        <p>Somos una compañía con más de quince años en el mercado argentino, ofreciendo Servicios de Impresión y copiado a muchas de las grandes empresas del país. Quienes ocupan los cargos en la gerencia comercial, son personas idóneas con amplia trayectoria en el manejo de procesos integrales de documentos.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}