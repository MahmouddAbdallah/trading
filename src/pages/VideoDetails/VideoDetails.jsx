import axios from "axios"
import { useCallback, useEffect } from "react"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { useParams, useNavigate } from "react-router-dom"
import { UseAppContext } from "../../context/appContext"
import Comments from "./Comments"
import Stars from "../../components/Stars"

const VideoDetails = () => {
    const [course, setCourse] = useState(null)
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const { user } = UseAppContext()
    const navigate = useNavigate()
    const fetchCourse = useCallback(
        async () => {
            try {

                setLoading(true)
                const { data } = await axios.get(`/api/Courses/GetCourseDetails?courseId=${id}`)
                setCourse(data);
                setLoading(false)
            } catch (error) {
                toast.error(error?.response?.data?.message || 'There is an Error')
                setLoading(false)
                console.error(error);
            }
        }, [id]
    )
    useEffect(() => {
        fetchCourse()
    }, [fetchCourse])
    // 
    return (
        <div>
            <div className="p-container py-10">
                <div className="w-full p-3 lg:p-10 card-services rounded-3xl  lg:m-5">
                    <div className={`max-h-[80vh] ${loading ? 'bg-slate-200 animate-pulse rounded-3xl' : ""}`}>
                        <img
                            className="w-full max-h-[80vh] rounded-3xl"
                            src={course?.photo}
                            alt=""
                        />
                    </div>
                </div>
                <div className="flex flex-col-reverse lg:grid grid-cols-12 pt-10">
                    <div className="col-span-9">
                        <div >
                            <div className="space-y-1">
                                <h4 className="text-[#0A033C] text-lg md:text-xl lg:text-3xl font-medium">
                                    Description
                                </h4>
                                <span className="block text-black/80">
                                    {course?.fullDesc}
                                </span>
                            </div>
                        </div>
                        <div className="pt-10">
                            <div className="space-y-1">
                                <h4 className="text-[#0A033C] text-lg md:text-xl lg:text-3xl font-medium">
                                    Instructors
                                </h4>
                                <div className="text-black/80 space-y-5">
                                    {course?.instructors?.map((instructor) => {
                                        return (
                                            <div key={instructor.id}>
                                                <div className="mt-5">
                                                    <div className="flex flex-col md:flex-row gap-2">
                                                        <div className="flex flex-col items-center">
                                                            <span className="text-lg font-bold text-blueText">{instructor.name}</span>
                                                            <div className="w-40 h-40">
                                                                <img src={instructor.photo} className="w-40 h-40 object-cover rounded-full" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="mt-0 md:mt-8">
                                                            <span className="font-bold text-lg block text-center md:text-left">About</span>
                                                            <span className="text-sm text-black/70">
                                                                {instructor.about}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="pt-10">
                            <Comments courseId={id} />
                        </div>
                    </div>
                    <div className="col-span-3">
                        <div className="space-y-5">
                            <div className=" card-services rounded-lg px-4 py-5">
                                <ul className="space-y-2">
                                    <li className="flex justify-between items-center">
                                        <span className="font-medium"> Rating</span>
                                        <span> <Stars rate={course?.rate} className={'h-4 w-4'} /></span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="font-medium"> Price</span>
                                        <span className="text-[#FF6652] font-medium text-lg">${course?.price}</span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span className="font-medium"> Old price</span>
                                        <span className="text-sm flex items-center justify-center relative before:content-[''] before:w-full before:h-[1px] before:bg-black/60 before:absolute">${course?.oldPrice}</span>
                                    </li>
                                </ul>
                            </div>
                            <button
                                onClick={() => {
                                    if (!user) {
                                        navigate('/sign-in')
                                    }
                                }}
                                className="w-full py-3 rounded-full btn-blue-gradient card-services text-white">
                                Purchase Course
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoDetails