import hero from '../assets/Vissions.png'
import BlueLine from './BlueLine'
const Missions = () => {
    return (
        <section className="p-container py-20">
            <div className='p-[1px] rounded-[60px] bg-gradient-to-l from-black/50 to-white'>
                <div className="lg:px-5 py-10 rounded-[60px] bg-bgColor">
                    <div>
                        <div className='flex flex-col items-center gap-5'>
                            <div className='text-center space-y-5'>
                                <h3 className='font-Raleway font-semibold text-4xl md:text-5xl lg:text-5xl text-blueText '>
                                    Missions
                                </h3>
                                <BlueLine />
                            </div>
                            <p className='text-center text-blueText/70 px-8 lg:px-0 lg:w-1/2'>
                                Our vision at Momentum for Education, Trading, and Marketing is to be a leading global provider of comprehensive educational resources, advanced trading tools, and impactful marketing
                            </p>
                        </div>
                        <div className='grid grid-cols-12 gap-5 md:gap-10 lg:gap-20 py-10 lg:py-20 lg:px-20'>
                            <div className='col-span-12 lg:col-span-6 px-5 lg:px-0'>
                                <img className='rounded-xl card-services sm:w-full' src={hero} alt="" />
                            </div>
                            <div className='col-span-12 lg:col-span-6 px-5 lg:px-0'>
                                <ul className='space-y-3'>
                                    <li className='flex gap-2 items-center'>
                                        <div className='w-4 h-4 bg-[#285D89] rounded-full shadow-lg shadow-black/70' />
                                        <span className='text-blueText text-lg'>
                                            Personalize user-experiences
                                        </span>
                                    </li>
                                    <li className='flex gap-2 items-center'>
                                        <div className='w-4 h-4 bg-[#285D89] rounded-full shadow-lg shadow-black/70' />
                                        <span className='text-blueText text-lg'>
                                            Synchronize operations
                                        </span>
                                    </li>
                                    <li className='flex gap-2 items-center'>
                                        <div className='w-4 h-4 bg-[#285D89] rounded-full shadow-lg shadow-black/70' />
                                        <span className='text-blueText text-lg'>
                                            Optimize transactions
                                        </span>
                                    </li>
                                    <li className='flex gap-2 items-center'>
                                        <div className='w-4 h-4 bg-[#285D89] rounded-full shadow-lg shadow-black/70' />
                                        <span className='text-blueText text-lg'>
                                            Personalize user-experiences
                                        </span>
                                    </li>
                                    <li className='flex gap-2 items-center'>
                                        <div className='w-4 h-4 bg-[#285D89] rounded-full shadow-lg shadow-black/70' />
                                        <span className='text-blueText text-lg'>
                                            Synchronize operations
                                        </span>
                                    </li>
                                    <li className='flex gap-2 items-center'>
                                        <div className='w-4 h-4 bg-[#285D89] rounded-full shadow-lg shadow-black/70' />
                                        <span className='text-blueText text-lg'>
                                            Optimize transactions
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

export default Missions