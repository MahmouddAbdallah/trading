import { ClockIcon, VideoIcon } from './icons'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Stars from './Stars'

const Course = ({ data }) => {
    return (
        <>
            {data.courseId ?
                <div>
                    <div className='p-3'>
                        <img
                            className='w-full lg:max-h-[250px] xl:max-h-[290px] rounded-lg'
                            src={data?.coursePhoto}
                            alt=""
                        />
                    </div>
                    <div className='px-5'>
                        <div className="space-y-2">
                            <div>
                                <div className='flex justify-between'>
                                    <span>
                                        {data.shortDesc}
                                    </span>
                                    <Stars rate={data.rate} />
                                </div>
                                <div>
                                    <span className="text-[#428BAD] font-semibold">
                                        ${data.price}
                                    </span>
                                </div>
                            </div>
                            <div className="border-t border-black/50 pt-2 border-dashed flex gap-5">
                                <div className="flex gap-1 datas-center">
                                    <ClockIcon className={'w-6 h-6'} />
                                    <span className="text-black/40 text-sm">
                                        {data.totalHouers}hr
                                    </span>
                                </div>
                                <div className="flex gap-1 datas-center">
                                    <VideoIcon className={'w-6 h-6'} />
                                    <span className="text-black/40 text-sm">
                                        {data.numberLecture} Courses
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-center relative pb-5">
                                <Link to={`/course/${data.courseId}`} className="px-10 py-2 rounded-full btn-blue-gradient text-white font-medium absolute card-services">Join Course</Link>
                            </div>
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
Course.propTypes = {
    data: PropTypes.object
}

export default Course