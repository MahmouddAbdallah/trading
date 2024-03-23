import { Link } from 'react-router-dom'
import logo from '../../../assets/Logo.png'
import { ArrowIcon, BusinessIcon, HomeIcon, OrdersIcon, ReportIcon, WalletIcon } from '../../../components/icons'
import style from '../style.module.css'

const Sidebar = () => {
    const items = [
        {
            icon: <HomeIcon className={'fill-[#003966]'} />,
            name: 'Dashboard',
            herf: 'dashboard'
        },
        {
            icon: <BusinessIcon className={'fill-[#003966]'} />,
            name: 'My Business',
            herf: 'business',
        },
        {
            icon: <ReportIcon className={'stroke-[#003966]'} />,
            name: 'My Reports',
            herf: 'roeports',
        },
        {
            icon: <OrdersIcon className={'fill-[#003966]'} />,
            name: 'My Orders',
            herf: 'orders',
        },
        {
            icon: <WalletIcon className={'fill-[#003966]'} />,
            name: 'My Wallet',
            herf: 'wallet',
        },
    ]
    return (
        <div className="p-4 flex flex-col h-screen shadow-lg shadow-black/30 bg-[#EBEFF3]">
            <Link to={'/'}>
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
                                    <div className={`flex items-center gap-5 py-5 shadow-lg px-8 rounded-md ${style.sidebarBtnShadow}`}>
                                        {item.icon}
                                        <span className='text-[#003966] font-bold whitespace-nowrap'>
                                            {item.name}
                                        </span>
                                        <ArrowIcon className={'stroke-[#003966]'} />
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

export default Sidebar