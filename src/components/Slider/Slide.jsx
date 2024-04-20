import PropTypes from 'prop-types'

const Slide = ({ img, title, text }) => {
    return (
        <div className="p-container py-20 ">
            <div className="grid grid-cols-12">
                <div className="col-span-12 lg:col-span-6">
                    <div className='lg:mt-20 space-y-5 lg:space-y-5'>
                        <h1 className='text-5xl font-medium sm:text-6xl md:text-7xl xl:text-[90px] text-[#31456A]'>
                            {title}
                        </h1>
                        <p className='text-[#31456A]'>
                            {text}
                        </p>
                        <div className='flex lg:justify-end pr-10'>
                            <button className='bg-[#E3EDF7] px-6 py-3 rounded-lg text-[#31456A] text-sm border border-[#B9CCE2] next'>
                                See more   →
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

Slide.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}


export default Slide