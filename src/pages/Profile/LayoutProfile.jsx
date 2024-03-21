import { Outlet } from 'react-router-dom'
import Sidebar from './component/Sidebar'
const LayoutProfile = () => {
    return (
        <div className='flex gap-5'>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default LayoutProfile