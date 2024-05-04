import PropTypes from 'prop-types'

const Instrutors = ({ data }) => {

    return (
        <>
            {data.instructorId ?
                <div>
                    <div className='p-3'>
                        <img
                            className='w-full max-h-[250px] xl:max-h-[290px] rounded-lg'
                            src={data?.instructorPhoto}
                            alt=""
                        />
                    </div>
                    <div className='px-5 pb-7'>
                        <div className='space-y-2'>
                            <div className='space-y-2'>
                                <div>
                                    <h4 className='text-base lg:text-lg text-black font-medium'>
                                        {data.instractorName}
                                    </h4>
                                    <span className='text-[#868686]  text-sm'>
                                        {data.email}
                                    </span>
                                </div>
                                <span className='block text-[#ACACAC]'>
                                    {data.about}
                                </span>
                            </div>
                            <span className='block text-[#488EB0]'>
                                {data.instractorTitle}
                            </span>
                        </div>
                    </div>
                </div> :
                <div>
                    <div className={`${!data.id && 'h-64 bg-slate-300 animate-pulse'}`} />
                    <div className='w-72 h-5 bg-slate-300 rounded-3xl m-3 animate-pulse' />
                    <div className='w-52 h-5 bg-slate-300 rounded-3xl m-3 animate-pulse' />
                    <div className='w-80 h-5 bg-slate-300 rounded-3xl m-3 animate-pulse' />
                </div>
            }
        </>
    )
}

Instrutors.propTypes = {
    data: PropTypes.object
}

export default Instrutors