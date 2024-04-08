import { useState } from "react";
import LogOut from "../../../components/LogOut";
import { MenuIcon } from "../../../components/icons"
import { UseAppContext } from "../../../context/appContext"
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom'
import useClickOutside from "../../../hooks/useClickOutSide";


const Navbar = ({ setOpen }) => {
    const { user } = UseAppContext();
    const [openDrop, setOpenDrop] = useState(false)
    const dropRef = useClickOutside(() => setOpenDrop(false))

    const { pathname } = useLocation();

    return (
        <nav>
            <div className="w-full flex justify-between items-center p-container py-5">
                <div>
                    <button
                        className="block lg:hidden"
                        onClick={() => { setOpen({ bool: true, href: pathname?.split("/")[2] }) }}
                    >
                        <MenuIcon className={'w-7 h-7'} />
                    </button>
                </div>
                {user ?
                    <div ref={dropRef} className="relative">
                        <button
                            onClick={() => setOpenDrop(!openDrop)}
                            className="flex gap-3"
                        >
                            <div>
                                <span className="block text-sm"> basic account</span>
                                <span className="block font-semibold"> {user?.name}</span>
                            </div>
                            <div className="bg-red-500 flex justify-center items-center w-10 h-10 rounded-full font-bold text-white">
                                {user?.name?.split('')[0]}
                            </div>
                        </button>
                        {
                            openDrop &&
                            <div className='absolute top-12 bg-white rounded-lg z-50'>
                                <ul>
                                    <li className='block px-5 py-2 text-sm border-b'>
                                        <LogOut />
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                    : ""}
            </div>
        </nav>
    )
}
Navbar.propTypes = {
    setOpen: PropTypes.func
}
export default Navbar