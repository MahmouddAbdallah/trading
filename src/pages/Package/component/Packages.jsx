import WhySection from '../../../assets/WhySection.png'
import { UsePackageContext } from '../context/appPackageContext'
import Package from './Package'

const Packages = () => {
    const { packages } = UsePackageContext()
    return (
        <div className='py-10 relative'>
            <div>
                <div className='flex justify-center'>
                    <div className='text-center leading-9 sm:w-[60%]'>
                        <h3 className="font-Roboto font-semibold text-2xl md:text-3xl lg:text-4xl text-blueText lg:mb-2">
                            Our Featured Packages
                        </h3>
                    </div>
                </div>
                <div className="p-container">
                    <div className='grid grid-cols-12 lg:gap-5 pt-10'>
                        {packages?.map(item => (
                            <div
                                key={item.id}
                                className='col-span-12 md:col-span-6 lg:col-span-4 m-3 card-services rounded-xl overflow-hidden '
                            >
                                <Package data={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='absolute -z-10 left-0 -top-10'>
                <img src={WhySection} className='w-28' alt="" />
            </div>
        </div>
    )
}

export default Packages