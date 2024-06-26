import { useState } from 'react'
import logo from '../../assets/Logo.png'
import { CartIcon, CloseIcon, MenuIcon } from '../icons'
import style from './style.module.css'
import { Link, useLocation } from 'react-router-dom'
import { UseAppContext } from '../../context/appContext'
import LogOut from '../LogOut'
import useClickOutside from '../../hooks/useClickOutSide'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [openDrop, setOpenDrop] = useState(false)
    const { pathname } = useLocation()
    const { user, cart } = UseAppContext()

    const dropRef = useClickOutside(() => setOpenDrop(false))

    const navs = [
        { name: 'Home', href: "/" },
        { name: 'Services', href: '/services' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: "/contact" },
    ]

    return (
        <nav className='pt-5 lg:pt-10 p-container'>
            <div className={`flex items-center justify-between border-[3px] border-white px-5 lg:px-10 py-2 lg:py-3 rounded-full nav-gradient ${style.shadowNav}`}>
                <Link to={'/'} className="block">
                    <img src={logo} className="w-[95px] lg:w-28 brightness-110" alt="" />
                </Link>
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
                        <div className='flex items-center gap-3'>
                            <Link to={'/package/cart'} className='relative hidden md:block'>
                                <CartIcon className={'w-8 h-8'} />
                                {cart?.length ?
                                    <div className='absolute flex justify-center items-center text-sm h-5 w-5 -top-2 -right-2 bg-[#478EB0] text-white rounded-full'>
                                        {cart?.length}
                                    </div> : ""
                                }
                            </Link>
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
                                                <Link onClick={() => setOpenDrop(false)} to={'p/dashboard'} className='block px-5 py-2 text-sm border-b'>
                                                    Dashboard
                                                </Link>
                                            </li>
                                            <li >
                                                <Link onClick={() => setOpenDrop(false)} to={'/package'} className='block px-5 py-2 text-sm border-b'>
                                                    Packages
                                                </Link>
                                            </li>
                                            <li className='block px-5 py-2 text-sm border-b'>
                                                <LogOut />
                                            </li>
                                        </ul>
                                    </div>
                                }
                            </div>
                        </div>
                        :
                        <Link
                            to={'/sign-in'}
                            className='hidden md:flex btn-blue-gradient px-10 py-2 rounded-full text-white text-sm lg:text-base shadow-md'>
                            Log In
                        </Link>
                    }
                </div>
                <div className='flex md:hidden items-center gap-3'>
                    <Link to={'/package/cart'} className='relative block md:hidden'>
                        <CartIcon className={'w-6 h-6'} />
                        {cart?.length ?
                            <div className='absolute flex justify-center items-center text-sm h-5 w-5 -top-2 -right-2 bg-[#478EB0] text-white rounded-full'>
                                {cart?.length}
                            </div> : ""
                        }
                    </Link>
                    <button onClick={() => {
                        setOpen(true)
                        document.body.style.overflowY = 'hidden'
                    }} className='px-3 md:hidden'>
                        <MenuIcon className={'w-8 h-8'} />
                    </button>
                </div>
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
                        <ul className='space-y-3'>
                            {
                                user ? <>
                                    <li>
                                        <div
                                            className="flex items-center gap-3 "
                                            onClick={() => setOpenDrop(!openDrop)}
                                        >
                                            <div className="bg-red-500 flex justify-center items-center w-10 h-10 rounded-full font-bold text-white">
                                                {user?.name?.split('')[0]}
                                            </div>
                                            <div>
                                                <span className="block font-medium"> {user?.name}</span>
                                                <span className="block text-xs font-medium"> {user?.email}</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li >
                                        <Link
                                            to={'/p/dashboard'}
                                            onClick={() => {
                                                setOpen(false)
                                                document.body.style.overflowY = 'auto'
                                            }}
                                            className={`text-decoration-none text-black font-bold`}
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                </>
                                    : ""
                            }
                            {navs.map(nav => (
                                <li key={nav.href}>
                                    <Link
                                        onClick={() => {
                                            setOpen(false)
                                            document.body.style.overflowY = 'auto'
                                        }}
                                        to={nav.href}
                                        className={`text-decoration-none text-black font-bold`}
                                    >
                                        {nav.name}
                                    </Link>
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