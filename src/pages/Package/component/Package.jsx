import PropTypes from 'prop-types'
import { useLocation, useNavigate } from 'react-router-dom'
import { ArrowRightIcon } from '../../../components/icons'
import { UseAppContext } from '../../../context/appContext'
const Package = ({ data }) => {
    const { setCart, cart } = UseAppContext()
    const { pathname } = useLocation()
    const navigate = useNavigate()

    const addToCart = (item) => {
        localStorage.setItem("cart", JSON.stringify([...cart, item]))
        setCart(JSON.parse(localStorage.getItem("cart") || '[]'))
        navigate('/package/cart')
    }

    return (
        <>
            {data.id ?
                <div>
                    <div>
                        <img
                            className='w-full h-56 object-cover'
                            src={data?.url}
                            alt=""
                        />
                    </div>
                    <div className='px-5 pt-5 pb-7'>
                        <div>
                            <h4 className='text-base lg:text-lg text-[#223F4A] font-medium'>
                                {data.name}
                            </h4>
                            <span className='block text-black'>
                                $ {data.price}
                            </span>
                        </div>
                        <div className='flex justify-end'>
                            <button
                                to={`/package/preview`}
                                onClick={() => { addToCart(data) }}
                                className={`text-sm card-services btn-blue-gradient ${pathname.includes("preview") ? 'p-3' : 'px-10 py-2'} rounded-full tracking-widest text-white font-medium`}>
                                {
                                    pathname.includes("preview") ?
                                        <ArrowRightIcon className={'w-5 h-5'} /> :
                                        "Add to cart"
                                }
                            </button>
                        </div>
                    </div>
                </div> :
                <div className={`${!data.id && 'h-64 bg-slate-300 animate-pulse'}`}>
                </div>
            }
        </>
    )
}

Package.propTypes = {
    data: PropTypes.object
}

export default Package