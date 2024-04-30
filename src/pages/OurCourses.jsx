import { useEffect, useState } from 'react'
import laba from '../assets/laba.png'
import axios from 'axios'
import Course from '../components/Course'

const OurCourses = () => {
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
        <div className='p-container mt-20'>
            <div >
                <div className='text-center flex items-center justify-center gap-5 relative'>
                    <h3 className='font-semibold text-4xl md:text-5xl lg:text-5xl text-[#285D89] '>
                        Our Courses
                    </h3>
                    <img src={laba} className={'absolute left-0 -top-10 w-32 h-32 hidden lg:block'} />
                </div>
                <div className="relative lg:py-5">
                    <div className='grid grid-cols-12 lg:gap-24 pt-5 lg:pt-10'>
                        {
                            courses?.map((item, i) => {
                                return (
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
            </div>
        </div>
    )
}

export default OurCourses