import { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import Stars from '../../components/Stars';

const Comments = ({ courseId }) => {
    const [comments, setComments] = useState(null);
    const fetchComments = useCallback(
        async () => {
            try {
                const { data } = await axios.get(`/api/Courses/GetCourseCommentsAndRates?courseId=${courseId}`);
                setComments(data);
            } catch (error) {
                console.error(error.message);
            }
        }, [courseId]
    )
    useEffect(() => {
        fetchComments()
    }, [fetchComments])
    return (
        <div>
            <div>
                <h4 className="text-[#0A033C] text-lg md:text-xl lg:text-3xl font-medium">
                    Comments
                </h4>
            </div>
            <div className='mt-5 space-y-5'>
                {
                    comments?.map(comment => {
                        const customer = comment.customerName?.split('')
                        return (
                            <div key={comment.commentId}>
                                <div className='flex gap-2 '>
                                    <div>
                                        <div className='w-11 h-11 bg-[#2b2b2b] rounded-full overflow-hidden flex items-center justify-center'>
                                            {comment.imgUrl ?
                                                <img className='w-11 h-11 object-cover' src={comment?.imgUrl} alt="" />
                                                : <span className='uppercase font-medium text-white'>
                                                    {customer[0] + customer[1]}
                                                </span>
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <span className='font-medium'>
                                                {comment.customerName}
                                            </span>
                                            <div>
                                                <Stars rate={comment.rate} className={'w-4 h-4'} />
                                            </div>
                                        </div>
                                        <div className='max-w-80'>
                                            <span className='max-w-80 block'>
                                                {comment.comment}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

Comments.propTypes = {
    courseId: PropTypes.number
}

export default Comments