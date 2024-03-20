import { useState } from 'react'
import logo from '../../assets/Logo.png'
import { CloseIcon, MenuIcon } from '../icons'
import style from './style.module.css'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { pathname } = useLocation()
    const navs = [
        { name: 'Home', href: "/" },
        { name: 'Services', href: '/services' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: "/contact" }
    ]
    return (
        <nav className='pt-5 lg:pt-10'>
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
                    <Link to={'/sign-in'} className={`hidden md:block btn-blue-gradient px-10 py-2 rounded-full text-white text-sm lg:text-base ${style.shadowBtn}`}>
                        REGISTER NOW
                    </Link>
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
                            <Link to={'/sign-in'} className='btn-blue-gradient px-10 py-2 rounded-full text-white text-sm lg:text-base shadow-md'>
                                REGISTER NOW
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar