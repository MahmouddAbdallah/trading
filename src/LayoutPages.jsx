import { Outlet } from 'react-router-dom'
import { Suspense } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
const LayoutPages = () => {

    return (
        <>
            <Navbar />
            <Suspense fallback={<div className='h-screen w-screen'>Loading...</div>}>
                <Outlet />
            </Suspense>
            <Footer />
        </>
    )
}
export default LayoutPages