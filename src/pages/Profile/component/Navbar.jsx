import { MenuIcon } from "../../../components/icons"
import { UseAppContext } from "../../../context/appContext"
import PropTypes from 'prop-types'

const Navbar = ({ setOpen }) => {
    const { user } = UseAppContext()
    return (
        <nav>
            <div className="w-full flex justify-between items-center p-container py-5">
                <div>
                    <button onClick={() => { setOpen(true) }} className="block lg:hidden">
                        <MenuIcon className={'w-7 h-7'} />
                    </button>
                </div>
                <div className="flex gap-3">
                    <div>
                        <span className="block text-sm"> basic account</span>
                        <span className="block font-semibold"> {user?.name}</span>
                    </div>
                    <div className="bg-red-500 flex justify-center items-center w-10 h-10 rounded-full font-bold text-white">
                        {user?.name?.split('')[0]}
                    </div>
                </div>
            </div>
        </nav>
    )
}
Navbar.propTypes = {
    setOpen: PropTypes.func
}
export default Navbar