import Navbar from "./Navbar/Navbar"
import hero from '../assets/hero.png'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="p-container overflow-hidden lg:pb-60">
            <Navbar />
            <div className=" flex flex-col lg:grid grid-cols-12">
                <div className="col-span-12 lg:col-span-6 pt-20">
                    <div className="space-y-4">
                        <h3 className="text-5xl md:text-6xl font-bold italic text-blueText">
                            Trading Business
                            Academy
                        </h3>
                        <p className="text-blueText/70">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi epudiandae raesentium
                            optio, eaque rerum!
                        </p>
                        <div>
                            <Link to={'/sign-in'} className='btn-blue-gradient px-10 py-2 rounded-full text-white text-sm lg:text-base shadow-md shadowBtn'>
                                REGISTER NOW
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-6 flex justify-center lg:block py-20 lg:pt-0">
                    <div className="relative">
                        <div className="lg:absolute lg:-right-64">
                            <img className="w-[572px]" src={hero} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header