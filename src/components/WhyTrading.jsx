import hero from '../assets/WhyTrading.png'
import BlueLine from './BlueLine'
const WhyTrading = () => {
    return (
        <section className="p-container py-20">
            <div className="card-services px-5 py-10 rounded-xl">
                <div className="flex flex-col gap-5 items-center text-center xl:px-60">
                    <h3 className='font-Raleway font-semibold text-4xl md:text-5xl lg:text-5xl text-blueText '>
                        WHY Trading Business Academy
                    </h3>
                    <BlueLine />
                    <div className="w-10/12 lg:w-[60%]">
                        <p className="text-blueText/70">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi epudiandae raesentium
                            optio, eaque rerum!
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-12 gap-5 mt-5'>
                    <div className='col-span-12 lg:col-span-6'>
                        <img src={hero} alt="" />
                    </div>
                    <div className='col-span-12 lg:col-span-6 space-y-14 flex flex-col justify-center'>
                        <ul className='space-y-5'>
                            <li className='flex gap-2 items-center'>
                                <div className='w-4 h-4 bg-[#285D89] rounded-full shadow-lg shadow-black/70' />
                                <span className='text-blueText text-lg'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </span>
                            </li>
                            <li className='flex gap-2 items-center'>
                                <div className='w-4 h-4 bg-[#285D89] rounded-full shadow-lg shadow-black/70' />
                                <span className='text-blueText text-lg'>
                                    Maxime mollitia, molestiae quas vel sint commodi
                                </span>
                            </li>
                            <li className='flex gap-2 items-center'>
                                <div className='w-4 h-4 bg-[#285D89] rounded-full shadow-lg shadow-black/70' />
                                <span className='text-blueText text-lg'>
                                    raesentium optio, eaque rerum! epudiandae
                                </span>
                            </li>
                        </ul>
                        <button className='w-fit bg-[#EBECF0] border-2 border-white rounded-full px-20 py-2 shadow-lg shadow-black/20 font-semibold'>
                            SEE MORE
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyTrading