import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../../assets/Logo.png'
import { ArrowIcon, BusinessIcon, HomeIcon, OrdersIcon, ReportIcon, WalletIcon } from '../../../components/icons'
import style from '../style.module.css'
import clsx from 'clsx'

import { useEffect, useState } from 'react'
import useClickOutsideSize from '../../../hooks/useClickOutSideSize'

const Sidebar = ({ open, setOpen }) => {
    const { pathname } = useLocation();
    const path = pathname?.replace(/^\/p\//, '')
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
            subName: [
                {
                    name: 'Transfer',
                    path: 'dashboard/transfer'
                },
                {
                    name: 'Holding Tank',
                    path: 'dashboard/holding-tank'
                },
            ]
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
            subName: [
                {
                    name: 'Ewallet Account History',
                    path: 'business'
                },
                {
                    name: 'Commissions History',
                    path: 'busines/commissions-history'
                },
            ]
        },
        {
            id: 3,
            icon: <ReportIcon className={
                pathname?.includes('dashboard')
                    ? 'stroke-white'
                    : 'stroke-[#003966]'}
            />,
            name: 'My Reports',
            href: 'roeports',
            subName: []
        },
        {
            id: 4,
            icon: <OrdersIcon className={
                pathname?.includes('orders')
                    ? 'fill-white'
                    : 'fill-[#003966]'}
            />,
            name: 'My Orders',
            href: 'orders',
            subName: []
        },
        {
            id: 5,
            icon: <WalletIcon className={
                pathname?.includes('wallet')
                    ? 'fill-white'
                    : 'fill-[#003966]'} />,
            name: 'My Wallet',
            href: 'wallet',
            subName: []
        },
    ]

    return (
        <div ref={refSidebar} className={`p-4 flex flex-col h-svh ${open.bool ? style.leftToRight : style.rightToLeft} shadow-lg shadow-black/30 bg-[#EBEFF3] fixed z-50 lg:sticky top-0 `}>
            <Link to={'/'} className='w-fit'>
                <div>
                    <img src={logo} alt="logo of trading acadmey." />
                </div>
            </Link>
            <div className='flex-1 flex items-center'>
                <div className='space-y-5'>
                    {
                        items.map(item => {
                            const openHref = open.href
                            const href = item.href
                            return (
                                <div key={item.href}>
                                    <div>
                                        <Link
                                            to={item.href}
                                            onClick={() => { setOpen({ ...open, href: href }) }}
                                        >
                                            <div className={`${style.sidebarBtnShadow} ${item.href.includes(pathname.split("/")[2]) && 'bg-[#428BAD] text-white'}`
                                            }>
                                                {item.icon}
                                                <span className={clsx(
                                                    'text-[#003966] font-bold whitespace-nowrap',
                                                    { 'text-white': item.href.includes(pathname.split("/")[2]) }
                                                )}>
                                                    {item.name}
                                                </span>
                                                <ArrowIcon className={clsx(
                                                    'stroke-[#003966]',
                                                    { 'rotate-90': openHref.includes(href) },
                                                    { 'stroke-white': item.href.includes(pathname.split("/")[2]) }
                                                )} />
                                            </div>
                                        </Link>
                                    </div>
                                    <ul className={`bg-blac5 mt-2 space-y-[6px] ${openHref.includes(href) ? 'block' : 'hidden'}`}>
                                        {
                                            item.subName.map(subname => {
                                                return (<li key={subname.name}>
                                                    <Link
                                                        to={subname.path}
                                                        className={`block rounded-md text-[#003966] text-sm 
                                                        ${path.includes(subname.path)
                                                                ? 'bg-blue-400 text-white'
                                                                : "bg-white/50"}`
                                                        }
                                                    >
                                                        <div className='w-full px-2 py-2'>
                                                            <span>{subname.name}</span>
                                                        </div>
                                                    </Link>
                                                </li>)
                                            }
                                            )
                                        }
                                    </ul>
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