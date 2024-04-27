import { Outlet, Navigate } from 'react-router-dom'
import Sidebar from './component/Sidebar';
import { useLocation } from 'react-router-dom'
import Navbar from './component/Navbar'
import { useState, Suspense } from 'react';
import { UseAppContext } from '../../context/appContext';
const LayoutProfile = () => {
    const { pathname } = useLocation();
    const [open, setOpen] = useState({
        bool: false,
        href: pathname?.replace(/^\/p\//, '')
    });
    const { user } = UseAppContext()
    if (!user) {
        return <Navigate to={'/'} />
    }
    return (
        <div className='flex gap-5 md:gap-10 lg:gap-20'>
            <Sidebar open={open} setOpen={setOpen} />
            <div className='w-full'>
                <Navbar setOpen={setOpen} />
                <div className='py-5'>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default LayoutProfile