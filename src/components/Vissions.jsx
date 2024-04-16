import hero from '../assets/our-value.jpg'
import BlueLine from './BlueLine'
const Vissions = () => {
    return (
        <section className="p-container pt-60 sm:pt-64 pb-20">
            <div className='p-[1px] rounded-[60px] bg-gradient-to-l from-black/50 to-white'>
                <div className="lg:px-5 rounded-[60px] bg-bgColor">
                    <div className='relative h-20 sm:h-48 md:h-56 lg:h-72 flex justify-center'>
                        <div className='absolute px-5 -top-44 sm:-top-52 md:-top-40'>
                            <img src={hero} className='rounded-3xl card-services' alt="" />
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col items-center gap-5'>
                            <h3 className='font-semibold text-4xl md:text-5xl lg:text-5xl text-[#285D89] '>
                                Our Value
                            </h3>
                            <BlueLine />
                        </div>
                        <div className='grid grid-cols-12 py-10 lg:pt-14 lg:pb-10 lg:gap-10 px-2 lg:px-0'>
                            <div className='col-span-12 lg:col-span-7 '>
                                <p className='text-center text-blueText/70 lg:px-3'>
                                    Contributing to raising performance in various educational and training fields
                                    And all other fields
                                    With the aim of increasing their capabilities
                                    Educational and investment
                                    Contributing to the implementation of small projects and helping young people achieve independence and move towards the financial markets
                                    Raising the level of youth and helping them direct their energy and setting their goals to reach a distinguished society with a high standard of living
                                    Organizing courses to raise the scientific, material and skill level of individuals
                                    Contributing to raising a distinguished generation capable of community development and advancement
                                    Contributing to opening investment markets for individuals by training them in managing small projects
                                </p>
                            </div>
                            <div className='col-span-12 lg:col-span-5 md:px-20 lg:px-0 flex justify-start lg:justify-center pt-10 lg:pt-0'>
                                <ul className='space-y-3'>
                                    <li className='flex gap-2'>
                                        <div><div className='w-4 h-4 bg-[#285D89] rounded-full shadow-lg shadow-black/70 mt-[6px]' /></div>
                                        <span className='text-[#285D89] font-medium lg:text-lg'>
                                            Offering improved educational and investment opportunities to the community.
                                        </span>
                                    </li>
                                    <li className='flex gap-2'>
                                        <div><div className='w-4 h-4 bg-[#285D89] rounded-full shadow-lg shadow-black/70 mt-[6px]' /></div>
                                        <span className='text-[#285D89] font-medium lg:text-lg'>
                                            Promoting trading and investment awareness in the Arab world, producing skilled traders and analysts capable of competing in financial markets.
                                        </span>
                                    </li>
                                    <li className='flex gap-2'>
                                        <div><div className='w-4 h-4 bg-[#285D89] rounded-full shadow-lg shadow-black/70 mt-[6px]' /></div>
                                        <span className='text-[#285D89] font-medium lg:text-lg'>
                                            Striving to become a leading example in financial market training and qualification, with distinguished courses across the Arab world.
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