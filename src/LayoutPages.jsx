import { Outlet } from 'react-router-dom'
import { Suspense } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import { LoadingIcon } from './components/icons';
const LayoutPages = () => {

    return (
        <>
            <Navbar />
            <Suspense fallback={<div className='flex justify-center py-52'><LoadingIcon className='animate-spin w-8 h-8' /></div>}>
                <Outlet />
            </Suspense>
            <Footer />
        </>
    )
}
export default LayoutPages