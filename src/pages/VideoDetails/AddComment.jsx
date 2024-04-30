import { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { ArrowLeftIcon, CloseIcon, LoadingIcon, StarIcon } from '../../components/icons'
import ErrorMsg from '../../components/ErrorMsg'
import useClickOutside from '../../hooks/useClickOutSide'
import { UseAppContext } from '../../context/appContext'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const AddComment = ({ setOpen }) => {
    const { register, formState: { isValid, errors, }, handleSubmit, reset, } = useForm()
    const [loading, setLoading] = useState(false)
    const [next, setNext] = useState(1)
    const [rate, setRate] = useState(1)
    const { user } = UseAppContext()
    const elementRef = useRef()
    const { id } = useParams()

    const handleComment = handleSubmit(async (formData) => {
        try {
            setLoading(true)
            const { data } = await axios.post('/api/Courses/AddComment',
                {
                    userId: user?.customerAttributeId,
                    courseId: id,
                    rate: rate,
                    comment: formData.comment
                })
            console.log(data);
            reset();
            setLoading(false)
        } catch (error) {
            toast.error(error?.response?.data?.message || 'There is an Error')
            setLoading(false)
            console.error(error);
        }
    })

    const handleClose = (e) => {
        e.preventDefault();
        document.body.style.overflowY = 'auto'
        setRate(1)
        setNext(1)
        setOpen(false)
    }
    const formRef = useClickOutside(() => {
        document.body.style.overflowY = 'auto'
        setRate(1)
        setNext(1)
        setOpen(false)
    })
    return (
        <div className='fixed left-0 top-0 h-screen w-screen bg-black/20 z-50 flex items-center justify-center'>
            <form ref={formRef} onSubmit={handleComment} className='bg-white rounded-lg'>
                <div className='flex items-center justify-between py-2 border-b px-2'>
                    <div className='flex items-center'>
                        {next == 2 &&
                            <button onClick={(e) => {
                                e.preventDefault();
                                const scrollElement = elementRef.current;
                                scrollElement.scrollLeft -= scrollElement.clientWidth
                                setNext(1)
                            }}>
                                <ArrowLeftIcon className={'w-5 h-5 fill-black'} />
                            </button>
                        }
                    </div>
                    <button onClick={handleClose}><CloseIcon className={'hover:fill-red-500'} />
                    </button>
                </div>
                <div ref={elementRef} className=' w-[340px] sm:w-[500px] px-5 py-10 flex overflow-hidden scroll-smooth'>
                    <div className='w-[340px] sm:w-[500px]'>
                        <div className='w-[340px] sm:w-[500px] h-full'>
                            <div className='w-[300px] sm:w-[460px] flex justify-center items-center h-full'>
                                <div className='flex gap-1'>
                                    {Array(parseInt(5))?.fill()?.map((_, i) => {
                                        return (
                                            <button key={i} onClick={(e) => {
                                                e.preventDefault();
                                                setRate(i + 1)
                                            }}>
                                                <StarIcon className={`w-16 h-16 ${rate > i ? 'fill-[#428BAD] stroke-[#428BAD]' : "fill-[#F9D4AB] stroke-[#F9D4AB]"}`} />
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[340px] sm:w-[500px]">
                        <form className='w-[300px] sm:w-[460px]'>
                            <div className="w-full">
                                <div className='w-full relative'>
                                    <textarea
                                        placeholder='Your review here...'
                                        className='w-full bg-transparent border border-black/40 rounded-md max-h-44 resize-none outline-none px-2 py-1'
                                        {...register('comment', { required: 'Please add a review' })}
                                    >
                                    </textarea>
                                    <div className='absolute -mt-5'>
                                        <ErrorMsg message={errors?.comment?.message} />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full px-3 border-t">
                    <div className='w-full flex justify-end gap-3 my-2'>
                        <button
                            onClick={handleClose}
                            className='px-8 py-1 rounded-md active:translate-x-[2px] active:translate-y-[2xp] bg-slate-200'>
                            Cancel
                        </button>
                        {next == 1 ?
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    const scrollElement = elementRef.current;
                                    if (scrollElement) {
                                        scrollElement.scrollLeft += scrollElement.clientWidth
                                        setNext(2)
                                    }
                                }}
                                className='px-8 py-1 rounded-md active:translate-x-[2px] active:translate-y-[2px] bg-blue-500 text-white'>
                                Next
                            </button>
                            :
                            <button
                                disabled={!isValid}
                                type='submit'
                                className='px-8 py-1 rounded-md disabled:translate-x-0 disabled:translate-y-0 active:translate-x-[2px] active:translate-y-[2px] bg-blue-500 disabled:bg-blue-300 text-white'>
                                {loading ? <LoadingIcon className='animate-spin w-6 h-6' /> : 'Submit'}
                            </button>
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}

AddComment.propTypes = {
    setOpen: PropTypes.func,
}

export default AddComment