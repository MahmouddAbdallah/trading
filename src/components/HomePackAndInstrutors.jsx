import Instrutors from "./Instrutors"
import { ArrowCircle, ClockIcon, VideoIcon } from "./icons"
import laba from '../assets/laba.png'
import { useEffect, useState } from "react"
import axios from "axios"
import Stars from "./Stars"


const HomePackAndInstrutors = () => {
    const [instrutors, setInstrutors] = useState([1, 2, 3, 4, 5, 6])

    const fetchInstructors = async () => {
        try {
            const { data } = await axios.get('/api/Admin/GetInstructors')
            setInstrutors(typeof data == 'string' ? [1, 2, 3, 4, 5, 6] : data)
        } catch (error) {
            // toast.error(error?.response?.data || "Can not get instrutors")
            console.error(error);
        }
    }
    useEffect(() => {
        fetchInstructors()
    }, []);

    const [courses, setcourses] = useState([1, 2, 3, 4, 5, 6])
    const GetHomeCourses = async () => {
        try {
            const { data } = await axios.get('/api/Courses/GetHomeCourses')
            setcourses(typeof data == 'string' ? [1, 2, 3, 4, 5, 6] : data)
        } catch (error) {
            // toast.error(error?.response?.data || "Can not get instrutors")
            console.error(error);
        }
    }
    useEffect(() => {
        GetHomeCourses()
    }, []);

    return (
        <div className="p-container space-y-10 lg:space-y-20">
            <div>
                <div className='text-center gap-5 relative'>
                    <h3 className='font-semibold text-4xl md:text-5xl lg:text-5xl text-[#285D89] '>
                        Our Courses
                    </h3>
                    <ArrowCircle className={'absolute right-0 -top-7 w-40 h-40 hidden lg:block'} />
                    <img src={laba} className={'absolute left-0 -top-10 w-32 h-32 hidden lg:block'} />
                </div>
                <div className="relative lg:py-5">
                    <div className='grid grid-cols-12 lg:gap-24 pt-5 lg:pt-10'>
                        {
                            courses?.map((item, i) => {
                                return (
                                    i < 2 &&
                                    <div
                                        key={i}
                                        className={`col-span-12 md:col-span-6 m-3 card-services rounded-xl  ${i < 2 ? '-mt-0' : 'mt-10 lg:-mt-14 '}`}
                                    >
                                        <>
                                            {item.courseId ?
                                                <div>
                                                    <div className='p-3'>
                                                        <img
                                                            className='w-full h-[290px] rounded-lg'
                                                            src={item?.coursePhoto}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className='px-5'>
                                                        <div className="space-y-2">
                                                            <div>
                                                                <div className='flex justify-between'>
                                                                    <span>
                                                                        {item.shortDesc}
                                                                    </span>
                                                                    <Stars rate={item.rate} />
                                                                </div>
                                                                <div>
                                                                    <span className="text-[#428BAD] font-semibold">
                                                                        ${item.price}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="border-t border-black/50 pt-2 border-dashed flex gap-5">
                                                                <div className="flex gap-1 items-center">
                                                                    <ClockIcon className={'w-6 h-6'} />
                                                                    <span className="text-black/40 text-sm">
                                                                        {item.totalHouers}hr
                                                                    </span>
                                                                </div>
                                                                <div className="flex gap-1 items-center">
                                                                    <VideoIcon className={'w-6 h-6'} />
                                                                    <span className="text-black/40 text-sm">
                                                                        {item.numberLecture} Courses
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-center relative pb-5">
                                                                <button className="px-10 py-2 rounded-full btn-blue-gradient text-white font-medium absolute card-services">Join Course</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> :
                                                <div className={`${!item.id && 'h-64 bg-slate-300 animate-pulse'}`}>
                                                </div>
                                            }
                                        </>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div>
                <div className='text-center gap-5 relative'>
                    <h3 className='font-semibold text-4xl md:text-5xl lg:text-5xl text-[#285D89] '>
                        Our Instructors
                    </h3>
                    <ArrowCircle className={'absolute left-0 -top-16 w-40 h-40 rotate-180 hidden lg:block'} />
                </div>
                <div className="relative lg:py-5">
                    <div className='grid grid-cols-12 lg:gap-24 pt-5 lg:pt-10'>
                        {
                            instrutors?.map((item, i) => {
                                return (
                                    i < 2 &&
                                    <div
                                        key={i}
                                        className={`col-span-12 md:col-span-6 m-3 card-services rounded-xl overflow-hidden ${i < 2 ? '-mt-0' : 'mt-0 lg:-mt-14 '}`}
                                    >
                                        <Instrutors data={item} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HomePackAndInstrutors