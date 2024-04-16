import hero from '../assets/WhyTrading.png'
import WhySection from '../assets/WhySection.png'
import BlueLine from './BlueLine'
const WhyTrading = () => {
    return (
        <section className="p-container pt-32 pb-10 relative ">
            <div className='absolute -z-10 left-0 -top-44 hidden lg:block'>
                <img src={WhySection} className='w-28' alt="" />
            </div>
            <div className="card-services px-5 py-10 rounded-xl bg-bgColor">
                <div className="flex flex-col gap-5 items-center text-center xl:px-60">
                    <h3 className='font-semibold text-4xl md:text-5xl lg:text-5xl text-blueText '>
                        About Trading Business Academy
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
                <div className='grid grid-cols-12 gap-5 mt-5 lg:mt-12'>
                    <div className='col-span-12 lg:col-span-6'>
                        <img src={hero} alt="" />
                    </div>
                    <div className='col-span-12 lg:col-span-6 space-y-14 flex flex-col justify-center'>
                        <ul className='space-y-5'>
                            <li className='flex gap-2'>
                                <div><div className='w-4 h-4 bg-[#285D89] rounded-full shadow-lg shadow-black/70 mt-[6px]' /></div>
                                <span className='text-[#285D89] font-medium lg:text-lg'>
                                    Comprehensive and in-depth courses in the world of foreign exchange and digital currencies starting from scratch to mastery.
                                </span>
                            </li>
                            <li className='flex gap-2'>
                                <div><div className='w-4 h-4 bg-[#285D89] rounded-full shadow-lg shadow-black/70 mt-[6px]' /></div>
                                <span className='text-[#285D89] font-medium lg:text-lg'>
                                    Covering all aspects of trading including a comprehensive trading course, beginning from the basics of trading (Forex) to advanced trading strategies.
                                </span>
                            </li>
                            <li className='flex gap-2'>
                                <div><div className='w-4 h-4 bg-[#285D89] rounded-full shadow-lg shadow-black/70 mt-[6px]' /></div>
                                <span className='text-[#285D89] font-medium lg:text-lg'>
                                    Providing learners with the knowledge they need to succeed in financial markets, specifically designed for beginners, covering all trading fundamentals in addition to some concepts presented in a simplified, easy-to-understand manner.
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