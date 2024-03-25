import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../../assets/Logo.png'
import { ArrowIcon, BusinessIcon, HomeIcon, OrdersIcon, ReportIcon, WalletIcon } from '../../../components/icons'
import style from '../style.module.css'
import clsx from 'clsx'
import useClickOutside from '../../../hooks/useClickOutSide'

const Sidebar = ({ open, setOpen }) => {
    const { pathname } = useLocation();
    const refSidebar = useClickOutside(() => setOpen(false))
    const items = [
        {
            icon: <HomeIcon className={
                pathname?.includes('dashboard')
                    ? 'fill-white'
                    : 'fill-[#003966]'}
            />,
            name: 'Dashboard',
            herf: 'dashboard'
        },
        {
            icon: <BusinessIcon className={
                pathname?.includes('business')
                    ? 'stroke-white fiill'
                    : 'fill-[#003966]'}
            />,
            name: 'My Business',
            herf: 'business',
        },
        {
            icon: <ReportIcon className={
                pathname?.includes('dashboard')
                    ? 'stroke-white'
                    : 'stroke-[#003966]'}
            />,
            name: 'My Reports',
            herf: 'roeports',
        },
        {
            icon: <OrdersIcon className={
                pathname?.includes('orders')
                    ? 'fill-white'
                    : 'fill-[#003966]'}
            />,
            name: 'My Orders',
            herf: 'orders',
        },
        {
            icon: <WalletIcon className={
                pathname?.includes('wallet')
                    ? 'fill-white'
                    : 'fill-[#003966]'} />,
            name: 'My Wallet',
            herf: 'wallet',
        },
    ]
    console.log(open);
    return (
        <div ref={refSidebar} className={`p-4 flex flex-col h-screen shadow-lg shadow-black/30 bg-[#EBEFF3] fixed z-50 lg:sticky top-0 ${open ? style.leftToRight : style.rightToLeft} `}>
            <Link to={'/'} className='w-fit'>
                <div>
                    <img src={logo} alt="logo of trading acadmey." />
                </div>
            </Link>
            <div className='flex-1 flex items-center'>
                <div className='space-y-5'>
                    {
                        items.map(item => (
                            <div key={item.herf}>
                                <Link to={item.herf} >
                                    <div className={`flex items-center gap-5 py-5 shadow-lg px-8 rounded-md ${style.sidebarBtnShadow} ${pathname?.includes(item.herf) && 'bg-[#428BAD] text-white'}`}>
                                        {item.icon}
                                        <span className={clsx(
                                            'text-[#003966] font-bold whitespace-nowrap',
                                            { 'text-white': pathname?.includes(item.herf) }
                                        )}>
                                            {item.name}
                                        </span>
                                        <ArrowIcon className={clsx(
                                            'stroke-[#003966]',
                                            { 'stroke-white': pathname?.includes(item.herf) }
                                        )} />
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}


Sidebar.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func
}

export default Sidebar