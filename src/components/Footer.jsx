import logo from '../assets/Logo.png'
import arrowLeft from '../assets/arrowLeft.png'
import EmailSign from '../assets/EmailSign.png'
import Map from '../assets/Map.png'
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
            <div className="bg-footerColor py-20 px-16 rounded-3xl flex lg:justify-around items-center gap-10 flex-wrap">
                <div className="space-y-3 lg:w-1/3 md:w-1/2">
                    <img src={logo} alt="" />
                    <p className='text-white/95'>
                        Trading business academy is the first industrial-grade no-code platform specifically designed for software engineers.
                    </p>
                </div>
                <div className='text-white space-y-5 mt-16'>
                    <span className='text-bold text-2xl'>Our Services</span>
                    <ul className='space-y-5'>
                        <li className='flex gap-3'>
                            <img src={arrowLeft} alt="" />
                            <span>Lirem lorem</span>
                        </li>
                        <li className='flex gap-3'>
                            <img src={arrowLeft} alt="" />
                            <span>Lirem lorem</span>
                        </li>
                        <li className='flex gap-3'>
                            <img src={arrowLeft} alt="" />
                            <span>Lirem lorem</span>
                        </li>
                    </ul>
                </div>
                <div className='text-white space-y-5 mt-16'>
                    <span className='text-bold text-2xl'>Our Services</span>
                    <ul className='space-y-5 '>
                        <li className='flex gap-3'>
                            <img src={Map} alt="" />
                            <span>123 street, xyz road, abc</span>
                        </li>
                        <li className='flex gap-3'>
                            <img src={Phone} alt="" />
                            <span>+123 123 1234</span>
                        </li>
                        <li className='flex gap-3'>
                            <img src={EmailSign} alt="" />
                            <span>contact@enweb.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer