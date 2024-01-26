
export default function SectionSolution({ title, image, description }) {
    return (
        <>
            <h2 className='flex items-center text-center justify-center text-gray-500 text-2xl px-4 md:text-3xl my-12 font-medium tracking-wide'>
                {title}
            </h2>
            <div className='container p-8 mx-auto mb-10'>
                <div className='container md:grid-cols-1 grid lg:grid-cols-2 md:container-lg gap-8 justify-items-center'>
                    <img data-aos="fade-right" src={image} alt='monitoreo' className='w-80 shadow-[20px_20px_rgba(3,124,243,0.73)]' />
                    <div className='flex items-center px-4'>
                        <p data-aos="zoom-in" className='text-center text-base leading-7 text-cyan-500 font-medium my-5'>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </>


    )
}