import PropTypes from 'prop-types'

const Package = ({ data }) => {
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
                    <button className="text-sm card-services btn-blue-gradient px-10 py-2 rounded-full tracking-widest text-white font-medium">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

Package.propTypes = {
    data: PropTypes.object
}

export default Package