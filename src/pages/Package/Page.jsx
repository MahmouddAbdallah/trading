import hero from '../../assets/pakage_hero.png'
import Packages from './component/Packages'
const Page = () => {
    return (
        <div>
            <div className="p-container py-20">
                <div className="grid grid-cols-12 lg:gap-10 card-services px-5 lg:px-20 pt-10 rounded-xl bg-bgColor">
                    <div className="flex items-center col-span-12 lg:col-span-4">
                        <div className="space-y-3">
                            <h3 className="font-Roboto font-semibold text-4xl md:text-5xl lg:text-5xl text-blueText">
                                Our Packages
                            </h3>
                            <p>
                                Some important lessons of the course
                                Explaining the basic concepts of the Forex market
                                Definition of financial markets and their types
                                Forex market history
                                Definition of trading
                                Knowing the most famous currency pairs
                                How to add currency pairs
                            </p>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-8 lg:ml-20 mt-10 lg:mt-0">
                        <img src={hero} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <Packages />
            </div>
        </div>
    )
}

export default Page