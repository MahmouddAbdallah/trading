import { useState } from 'react'
import logo from '../../assets/Logo.png'
import { CloseIcon, MenuIcon } from '../icons'
import style from './style.module.css'
import { Link, useLocation } from 'react-router-dom'
import { UseAppContext } from '../../context/appContext'
import LogOut from '../LogOut'
import useClickOutside from '../../hooks/useClickOutSide'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [openDrop, setOpenDrop] = useState(false)
    const { pathname } = useLocation()
    const { user } = UseAppContext()

    const dropRef = useClickOutside(() => setOpenDrop(false))

    const navs = [
        { name: 'Home', href: "/" },
        { name: 'Services', href: '/services' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: "/contact" },
        { name: 'Packages', href: "/package" },
    ]

    return (
        <nav className='pt-5 lg:pt-10 p-container'>
            <div className={`flex items-center justify-between border-[3px] border-white px-5 lg:px-10 py-2 lg:py-3 rounded-full nav-gradient ${style.shadowNav}`}>
                <div className="w-28">
                    <img src={logo} className="w-20 lg:w-24" alt="" />
                </div>
                <ul className='hidden md:flex gap-5'>
                    {navs.map(nav => (
                        <li key={nav.href}>
                            <Link
                                to={nav.href}
                                className={`text-decoration-none text-black font-bold ${nav.href == pathname && 'shadow-inner shadow-black/20 py-[6px] px-3 rounded-full'}`}
                            >
                                {nav.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div>
                    {user ?
                        <div ref={dropRef} className="hidden md:block relative">
                            <button
                                className="flex items-center gap-3 "
                                onClick={() => setOpenDrop(!openDrop)}
                            >
                                <span className="block font-semibold"> {user?.name}</span>
                                <div className="bg-red-500 flex justify-center items-center w-10 h-10 rounded-full font-bold text-white">
                                    {user?.name?.split('')[0]}
                                </div>
                            </button>
                            {
                                openDrop &&
                                <div className='absolute top-12 bg-white rounded-lg z-50'>
                                    <ul>
                                        <li >
                                            <Link to={'p/dashboard'} className='block px-5 py-2 text-sm border-b'>
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li >
                                            <Link to={'/package/cart'} className='block px-5 py-2 text-sm border-b'>
                                                Cart
                                            </Link>
                                        </li>
                                        <li className='block px-5 py-2 text-sm border-b'>
                                            <LogOut />
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                        :
                        <Link
                            to={'/sign-in'}
                            className='hidden md:flex btn-blue-gradient px-10 py-2 rounded-full text-white text-sm lg:text-base shadow-md'>
                            Log In
                        </Link>
                    }
                </div>
                <button onClick={() => {
                    setOpen(true)
                    document.body.style.overflowY = 'hidden'
                }} className='px-3 md:hidden'>
                    <MenuIcon className={'w-8 h-8'} />
                </button>
                <div className={`fixed h-full w-full top-0 left-0 bg-bgColor z-50 ${open ? style.bottomToTop : style.topToBottom}`}>
                    <div className='flex justify-end p-5'>
                        <button onClick={() => {
                            setOpen(false)
                            document.body.style.overflowY = 'auto'
                        }}>
                            <CloseIcon className={'w-6 h-6'} />
                        </button>
                    </div>
                    <div className='px-10 space-y-10'>
                        <ul className='space-y-5'>
                            {navs.map(nav => (
                                <li key={nav.href}>
                                    <a
                                        href={nav.href}
                                        className={`text-decoration-none text-black font-bold`}
                                    >
                                        {nav.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div>
                            {user ?
                                <LogOut />
                                :
                                <Link to={'/sign-in'} className='btn-blue-gradient px-10 py-2 rounded-full text-white text-sm lg:text-base shadow-md'>
                                    Log In
                                </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar