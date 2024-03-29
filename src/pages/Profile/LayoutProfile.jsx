import { Outlet } from 'react-router-dom'
import Sidebar from './component/Sidebar'
import Navbar from './component/Navbar'
import { useState, Suspense } from 'react';
const LayoutProfile = () => {
    const [open, setOpen] = useState(false);

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