import { Link } from "react-router-dom"
import HeaderLeft from "./HeaderLeft/HeaderLeft"
import { UseAppContext } from "../context/appContext"

const Header = () => {
    const { user } = UseAppContext()

    return (
        <header className="p-container overflow-hidden lg:pb-60">
            <div className="flex flex-col lg:grid grid-cols-12">
                <div className="col-span-12 lg:col-span-6 pt-20">
                    <div className="space-y-4">
                        <h3 className="text-5xl md:text-6xl font-bold italic text-blueText">
                            Trading Business
                            Academy
                        </h3>
                        <p className="text-blueText/70">
                            It is a pioneering educational institution in the field of financial markets that was established by youth cadres in various countries
                            It is one of the pioneers in the field of training and qualification in the financial markets and online business
                            An Egyptian academy with its administrative headquarters in Dokki, Cairo
                        </p>
                        <div className="py-2">
                            {!user ?
                                <Link to={'/sign-in'} className='btn-blue-gradient px-10 py-2 rounded-full text-white text-sm lg:text-base shadow-md shadowBtn'>
                                    Log In
                                </Link> : ""
                            }
                        </div>
                    </div>
                </div>
                <div className="col-span-6 flex justify-center lg:block py-20 lg:pt-0">
                    <div className="relative">
                        <div className="lg:absolute lg:-right-64 w-[400px] md:w-[585px] mt-12">
                            <HeaderLeft />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header