import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../../assets/Logo.png'
import { ArrowIcon, BusinessIcon, HoldingIcon, HomeIcon, OrdersIcon, ReportIcon, TransferIcon, WalletIcon } from '../../../components/icons'
import style from '../style.module.css'
import clsx from 'clsx'

import { useEffect, useState } from 'react'
import useClickOutsideSize from '../../../hooks/useClickOutSideSize'

const Sidebar = ({ open, setOpen }) => {
    const { pathname } = useLocation();
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const refSidebar = useClickOutsideSize(() => {
        setOpen({ bool: false, href: pathname?.replace(/^\/p\//, '') });
    }, windowSize);

    const items = [
        {
            id: 1,
            name: "Dashboard",
            icon: <HomeIcon className={
                pathname?.includes('dashboard')
                    ? 'fill-white'
                    : 'fill-[#003966]'}
            />,
            href: "dashboard",
        },
        {
            id: 2,
            name: "My Business",
            icon: <BusinessIcon className={
                pathname.split("/")[2] == 'business'
                    ? 'stroke-white fiill'
                    : 'fill-[#003966]'}
            />,
            href: "business",
        },
        {
            id: 6,
            name: "Holding Tank",
            icon: <HoldingIcon className={` 
            w-5 h-5 fill-2
            ${pathname?.includes('holding-tank')
                    ? 'fill-white'
                    : 'fill-[#003966]'
                }`}
            />,
            href: "holding-tank",
        },
        {
            id: 7,
            name: "Transfer",
            icon: <TransferIcon className={` 
            w-5 h-5 fill-2
            ${pathname?.includes('transfer')
                    ? 'fill-white'
                    : 'fill-[#003966]'
                }`}
            />,
            href: "transfer",
        },
        {
            id: 3,
            icon: <ReportIcon className={
                pathname?.includes('reports')
                    ? 'stroke-white '
                    : 'stroke-[#003966]'}
            />,
            name: 'My Reports',
            href: 'reports',
        },
        {
            id: 4,
            icon: <OrdersIcon className={
                pathname?.includes('orders')
                    ? 'stroke-white'
                    : 'fill-[#003966]'}
            />,
            name: 'My Orders',
            href: 'orders',
        },
        {
            id: 5,
            icon: <WalletIcon className={
                pathname?.includes('wallet')
                    ? 'stroke-white fill-white'
                    : 'fill-[#003966]'} />,
            name: 'My Wallet',
            href: 'wallet',
        },
    ]

    return (
        <div ref={refSidebar} className={`p-4 flex flex-col h-svh ${open.bool ? style.leftToRight : style.rightToLeft} shadow-lg shadow-black/30 bg-[#EBEFF3] fixed z-50 lg:sticky top-0 `}>
            <div className='w-full flex justify-center'  >
                <Link to={'/'}>
                    <img
                        className='w-[120px] h-[120px] brightness-105'
                        src={logo}
                        alt="logo of trading acadmey"
                    />
                </Link>
            </div>
            <div className='flex-1 flex items-center'>
                <div className='space-y-5'>
                    {
                        items.map(item => {
                            return (
                                <div key={item.href}>
                                    <div>
                                        <Link
                                            to={item.href}
                                        >
                                            <div className={` flex items-center justify-between gap-5 py-4 shadow-lg px-8 rounded-md ${style.sidebarBtnShadow} ${item.href.includes(pathname.split("/")[2]) && 'bg-[#428BAD] text-white'}`
                                            }>
                                                <div className='flex gap-4'>
                                                    {item.icon}
                                                    <span className={clsx(
                                                        'text-[#003966] font-bold whitespace-nowrap block',
                                                        { 'text-white': item.href.includes(pathname.split("/")[2]) }
                                                    )}>
                                                        {item.name}
                                                    </span>
                                                </div>
                                                <ArrowIcon className={clsx(
                                                    'stroke-[#003966]',
                                                    { 'stroke-white': item.href.includes(pathname.split("/")[2]) }
                                                )} />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}


Sidebar.propTypes = {
    open: PropTypes.object,
    setOpen: PropTypes.func
}

export default Sidebar