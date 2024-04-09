import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import AppPackageProvider from './context/appPackageContext'
const PackageLayout = () => {

    return (
        <>
            <AppPackageProvider>
                <Suspense fallback={<div className='h-screen w-screen'>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </AppPackageProvider>
        </>
    )
}
export default PackageLayout