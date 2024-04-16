import logo from '../assets/Logo.png'
import arrowLeft from '../assets/arrowLeft.png'
import EmailSign from '../assets/EmailSign.png'
// import map from '../assets/Map.png'
import Phone from '../assets/Phone.png'


const Footer = () => {
    return (
        <footer className="p-container pt-32 pb-5">
            <div className="flex justify-center lg:px-20">
                <div className="relative w-11/12 ">
                    <div className='absolute w-full -top-16 lg:-top-20 p-[1px] rounded-[35px] lg:rounded-[60px] bg-gradient-to-l from-black/50 to-white'>
                        <div className="bg-bgColor rounded-[35px] lg:rounded-[60px] px-5 sm:px-20 py-8 lg:py-16">
                            <h3 className='font-Raleway font-semibold text-lg sm:text-2xl md:text-3xl lg:text-4xl text-[#285D89]'>
                                Let’s make things awesome.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-footerColor pt-10 lg:pt-24 pb-10 px-8 md:px-10 lg:px-16 rounded-3xl flex lg:justify-around  gap-10 flex-wrap">
                <div className="space-y-3 lg:w-1/3 md:w-1/2 mt-5 md:mt-7 lg:mt-12">
                    <img className='w-28' src={logo} alt="" />
                    <p className='text-white/95'>
                        Trading business academy is the first industrial-grade no-code platform specifically designed for software engineers.
                    </p>
                </div>
                <div className='text-white space-y-5 mt-5 lg:mt-16'>
                    <span className='text-bold text-2xl'>Our Services</span>
                    <ul className='space-y-3'>
                        <li className='flex gap-3'>
                            <img className='w-8' src={arrowLeft} alt="" />
                            <span>Group signal</span>
                        </li>
                        <li className='flex gap-3'>
                            <img className='w-8' src={arrowLeft} alt="" />
                            <span>Offline courses</span>
                        </li>
                        <li className='flex gap-3'>
                            <img className='w-8' src={arrowLeft} alt="" />
                            <span>Online courses</span>
                        </li>
                        <li className='flex gap-3'>
                            <img className='w-8' src={arrowLeft} alt="" />
                            <span>Live trading</span>
                        </li>
                    </ul>
                </div>
                <div className='text-white space-y-5 mt-5 lg:mt-16'>
                    <span className='text-bold text-2xl'>Contact Details</span>
                    <ul className='space-y-3'>
                        {/* <li className='flex gap-3'>
                            <div className='w-8'>
                                <img src={map} alt="" />
                            </div>
                            <span>123 street, xyz road, abc</span>
                        </li> */}
                        <li className='flex gap-3'>
                            <div className='w-8'>
                                <img src={Phone} alt="" />
                            </div>
                            <span>+123 123 1234</span>
                        </li>
                        <li className='flex gap-3'>
                            <div className='w-8'>
                                <img src={EmailSign} alt="" />
                            </div>
                            <span>info@trading-business-<br className='hidden md:lock' />academy.com</span>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}

export default Footer

/**
 * 
 * 
 * <div className='text-white space-y-5'>
                    <span className='text-bold text-2xl'>Contact Details</span>
                    <ul className='space-y-3 w-full'>
                        <li className='flex gap-3'>
                            <div className='w-8'>
                                <img src={Phone} alt="" />
                            </div>
                            <span>+123 123 1234</span>
                        </li>
                        <li className='flex  gap-3'>
                            <div className='w-8'>
                                <img src={EmailSign} alt="" />
                            </div>
                            <span className=''>
                                info@trading-business-academy.com
                            </span>
                        </li>
                    </ul>
                </div>
 */