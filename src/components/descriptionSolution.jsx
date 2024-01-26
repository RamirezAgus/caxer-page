export default function DescriptionSolution({ title, items }) {
    return (
        <>
            <h3 className='text-center text-gray-500 text-2xl px-4 md:text-3xl my-6 tracking-wide'>
                {title}
            </h3>
            <div className='container-lg flex justify-center p-4 my-10 '>
                <div className='flex flex-col flex-wrap w-2/3'>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-right"
                            data-aos-delay="50"
                            data-aos-easing="ease-in-sine"
                            className='flex flex-wrap flex-row my-2 items-center'>
                            <item.icon className='text-cyan-500 text-5xl md:text-7xl' />
                            <h3 className="p-2 text-2xl font-bold text-cyan-500">{item.subtitle}</h3>
                            <p className="list-disc font-normal leading-6 p-3 text-gray-500 transition-transform transition-font hover:scale-105 hover:font-medium">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}