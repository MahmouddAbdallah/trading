import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../../assets/Logo.png'
import { ArrowIcon, BusinessIcon, HomeIcon, OrdersIcon, ReportIcon, WalletIcon } from '../../../components/icons'
import style from '../style.module.css'
import clsx from 'clsx'
import useClickOutside from '../../../hooks/useClickOutSide'

const Sidebar = ({ open, setOpen }) => {
    const { pathname } = useLocation();
    const refSidebar = useClickOutside(() => setOpen({ bool: false, href: pathname?.replace(/^\/p\//, '') }))
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
            href: "business/ewallet-account-history",
            subName: [
                {
                    name: 'Ewallet Account History',
                    path: 'business/ewallet-account-history'
                },
                {
                    name: 'Commissions History',
                    path: 'business/commissions-history'
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
            subName: [
                {
                    name: 'Create',
                    path: 'category/add'
                },
                {
                    name: 'Update',
                    path: 'category/update'
                },
            ]
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
            subName: [
                {
                    name: 'Create',
                    path: 'category/add'
                },
                {
                    name: 'Update',
                    path: 'category/update'
                },
            ]
        },
        {
            id: 5,
            icon: <WalletIcon className={
                pathname?.includes('wallet')
                    ? 'fill-white'
                    : 'fill-[#003966]'} />,
            name: 'My Wallet',
            href: 'wallet',
            subName: [
                {
                    name: 'Create',
                    path: 'category/add'
                },
                {
                    name: 'Update',
                    path: 'category/update'
                },
            ]
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
                        items.map(item => (
                            <div key={item.href}>
                                <div>
                                    <Link
                                        to={item.href}
                                        onClick={() => {
                                            setOpen(prev => {
                                                return {
                                                    ...open,
                                                    href: [prev.href] == item.href ? null : item.href
                                                }
                                            })
                                        }}
                                    >
                                        <div className={`flex items-center gap-5 py-5 shadow-lg px-8 rounded-md 
                                            ${style.sidebarBtnShadow}
                                            ${item.href.includes(pathname.split("/")[2]) && 'bg-[#428BAD] text-white'}`
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
                                                { 'rotate-90': open.href == item.href },
                                                { 'stroke-white': item.href.includes(pathname.split("/")[2]) }
                                            )} />
                                        </div>
                                    </Link>
                                </div>
                                <ul className={`bg-blac5 mt-2 space-y-[6px] ${open.href == item.href ? 'block' : 'hidden'}`}>
                                    {
                                        item.subName.map(subname => {
                                            return (<li key={subname.name}>
                                                <Link
                                                    to={subname.path}
                                                    className={`block rounded-md text-[#003966] text-sm 
                                                        ${subname.path.includes(pathname?.split('/')[3])
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
                        ))
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