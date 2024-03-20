import hero from '../assets/Vissions.png'
import BlueLine from './BlueLine'
const Vissions = () => {
    return (
        <section className="p-container pt-16 sm:pt-40">
            <div className='p-[1px] rounded-[60px] bg-gradient-to-l from-black/50 to-white'>
                <div className="lg:px-5 rounded-[60px] bg-bgColor">
                    <div className='relative h-20 sm:h-48 md:h-56 lg:h-60 flex justify-center'>
                        <div className='absolute px-5 -top-24 sm:-top-32 md:-top-40'>
                            <img src={hero} className='rounded-3xl card-services' alt="" />
                        </div>
                    </div>
                    <div>
                        <div className=' flex flex-col items-center gap-5'>
                            <h3 className='font-Raleway font-semibold text-4xl md:text-5xl lg:text-5xl text-blueText '>
                                Vissions
                            </h3>
                            <BlueLine />
                        </div>
                        <div className='grid grid-cols-12 gap-5 lg:gap-10 xl:gap-20 py-10 lg:py-20 lg:px-20'>
                            <div className='col-span-12 lg:col-span-6 px-8'>
                                <p className='text-center text-blueText/70'>
                                    Our vision at Momentum for Education, Trading, and Marketing is to be a leading global provider of comprehensive educational resources, advanced trading tools, and impactful marketing solutions. We aspire to create a community where individuals can learn, grow, and succeed together, driving positive change in the financial industry and beyond.
                                </p>
                            </div>
                            <div className='col-span-12 lg:col-span-6 px-8 md:px-20 lg:px-0 flex justify-start lg:justify-center'>
                                <ul className='space-y-3'>
                                    <li className='flex gap-2 items-center'>
                                        <div className='w-4 h-4 bg-[#285D89] rounded-full shadow-lg shadow-black/70' />
                                        <span className='text-blueText text-lg'>
                                            People & Processes
                                        </span>
                                    </li>
                                    <li className='flex gap-2 items-center'>
                                        <div className='w-4 h-4 bg-[#285D89] rounded-full shadow-lg shadow-black/70' />
                                        <span className='text-blueText text-lg'>
                                            Systems & Services
                                        </span>
                                    </li>
                                    <li className='flex gap-2 items-center'>
                                        <div className='w-4 h-4 bg-[#285D89] rounded-full shadow-lg shadow-black/70' />
                                        <span className='text-blueText text-lg'>
                                            Databases & Devices
                                        </span>
                                    </li>
                                    <li className='flex gap-2 items-center'>
                                        <div className='w-4 h-4 bg-[#285D89] rounded-full shadow-lg shadow-black/70' />
                                        <span className='text-blueText text-lg'>
                                            Applications & Artifacts
                                        </span>
                                    </li>
                                    <li className='flex gap-2 items-center'>
                                        <div className='w-4 h-4 bg-[#285D89] rounded-full shadow-lg shadow-black/70' />
                                        <span className='text-blueText text-lg'>
                                            Infrastructure & Networks
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vissions