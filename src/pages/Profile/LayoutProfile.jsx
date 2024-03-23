import { Outlet } from 'react-router-dom'
import Sidebar from './component/Sidebar'
import Navbar from './component/Navbar'
const LayoutProfile = () => {
    return (
        <div className='flex gap-5 md:gap-10 lg:gap-20'>
            <Sidebar />
            <div className='w-full'>
                <Navbar />
                <div className='py-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default LayoutProfile