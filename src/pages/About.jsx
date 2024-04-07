import hero from '../assets/hero_about.png'
import hero2 from '../assets/hero2_about.png';
import WhySection from '../assets/WhySection.png'
import AboutCards from '../components/AboutCards';

const About = () => {
    return (
        <div>
            <div className="p-container py-20">
                <div className="grid gap-5 grid-cols-12">
                    <div className="flex items-center col-span-12 lg:col-span-5 mr-8">
                        <div className="space-y-3">
                            <h3 className="font-Roboto font-semibold text-4xl md:text-5xl lg:text-5xl text-blueText">
                                About Us
                            </h3>
                            <p>
                                It is a pioneering educational institution in the field of financial markets that was established by youth cadres in various countries <br />
                                It is one of the pioneers in the field of training and qualification in the financial markets and online business
                                An Egyptian academy with its administrative headquarters in Dokki, CairoContribution to enhancing performance in various educational, training, and other fields with the aim of improving their educational and investment capabilities.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7">
                        <img src={hero} alt="" />
                    </div>
                </div>
            </div>
            <div className='relative'>
                <div className="p-container py-28">
                    <div className="grid gap-5 md:gap0 grid-cols-12">
                        <div className="flex items-center col-span-12 lg:col-span-6">
                            <div className="space-y-5">
                                <div className='space-y-2'>
                                    <h3 className="font-Roboto font-semibold text-3xl md:text-4xl text-[#478EB0]">
                                        Trading Business Academy
                                    </h3>
                                    <h3 className="font-Roboto font-semibold text-3xl md:text-4xl">
                                        Providing the best Courses
                                    </h3>
                                </div>
                                <p>
                                    Comprehensive and in-depth educational courses in the world of foreign exchange and digital currencies starting from scratch to mastery are provided. The educational content encompasses all aspects of trading, such as a comprehensive trading course, starting from the basics of trading (Forex) to advanced trading strategies. <br />
                                    This comprehensive educational course provides the knowledge needed to succeed in financial markets. The course is specifically designed for beginners in trading, covering all the fundamentals in the field of trading along with some concepts, all presented in a simplified and easy-to-understand manner.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-6 lg:ml-32 mt-16 lg:mt-0">
                            <img src={hero2} alt="" />
                        </div>
                    </div>
                </div>
                <div className='absolute -z-10 left-0 -bottom-44 hidden lg:block'>
                    <img src={WhySection} className='w-28' alt="" />
                </div>
            </div>
            <div className='p-container space-y-10 pt-10 pb-20'>
                <div className='flex justify-center'>
                    <div className='text-center leading-9 sm:w-[60%]'>
                        <h3 className="font-Roboto font-semibold text-2xl md:text-3xl text-blueText lg:mb-2">
                            Our Benefits
                        </h3>
                        <span className='font-Roboto font-medium text-2xl md:text-4xl lg:text-[40px] '>
                            By Joining our academy, One Can Avail a Lot Of Benefits.
                        </span>
                    </div>
                </div>
                <AboutCards />
            </div>
        </div>
    )
}

export default About