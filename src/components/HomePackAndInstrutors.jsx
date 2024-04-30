import Instrutors from "./Instrutors"
import { ArrowCircle, ArrowLeftIcon } from "./icons"
import laba from '../assets/laba.png'
import { useEffect, useState } from "react"
import axios from "axios"
import Course from "./Course"
import { Link } from "react-router-dom"


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
                <div className='text-center flex items-center justify-center gap-5 relative'>
                    <h3 className='font-semibold text-4xl md:text-5xl lg:text-5xl text-[#285D89] '>
                        Our Courses
                    </h3>
                    <div className={'absolute right-0  hidden lg:block'} >
                        <Link to={'/our-courses'} className="flex gap-3 text-[#488FB0] font-semibold text-xl">
                            <span className="">view all courses</span>
                            <ArrowLeftIcon className={'h-8 w-8 rotate-[120deg]'} />
                        </Link>
                    </div>
                    <img src={laba} className={'absolute left-0 -top-10 w-32 h-32 hidden lg:block'} />
                </div>
                <div className="relative lg:py-5">
                    <div className='grid grid-cols-12 lg:gap-24 pt-5 lg:pt-10'>
                        {
                            courses?.map((item, i) => {
                                return (
                                    i < 2 &&
                                    <div
                                        className={`col-span-12 md:col-span-6 m-3 card-services rounded-xl mt-10  ${i < 2 ? '-mt-0' : 'mt-10 lg:-mt-14 '}`}
                                        key={i}>
                                        <Course data={item} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flex lg:hidden justify-center mt-10">
                    <Link to={'/our-courses'} className="flex items-center gap-3 text-[#488FB0] font-semibold text-sm">
                        <span className="">view all courses</span>
                        <ArrowLeftIcon className={'h-6 w-6 rotate-[180deg]'} />
                    </Link>
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
                                        className={`col-span-12 md:col-span-6 m-3 card-services rounded-xl overflow-hidden mt-10 ${i < 2 ? '-mt-0' : 'mt-0 lg:-mt-14 '}`}
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