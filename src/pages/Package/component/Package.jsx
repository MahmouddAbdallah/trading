import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import { UsePackageContext } from '../context/appPackageContext'
import { ArrowRightIcon } from '../../../components/icons'

const Package = ({ data }) => {
    const { setPreviewPackage } = UsePackageContext()
    const { pathname } = useLocation()
    return (
        <div>
            <div>
                <img
                    className='w-full'
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
                    <Link
                        to={`/package/preview`}
                        onClick={() => { setPreviewPackage(data) }}
                        className={`text-sm card-services btn-blue-gradient ${pathname.includes("preview") ? 'p-3' : 'px-10 py-2'} rounded-full tracking-widest text-white font-medium`}>
                        {
                            pathname.includes("preview") ?
                                <ArrowRightIcon className={'w-5 h-5'} /> :
                                "Add to cart"
                        }
                    </Link>
                </div>
            </div>
        </div>
    )
}

Package.propTypes = {
    data: PropTypes.object
}

export default Package