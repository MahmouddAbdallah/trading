import PropTypes from 'prop-types'
import { useState } from "react"
import { useForm } from "react-hook-form"
import ErrorMsg from "./ErrorMsg"
import clsx from "clsx"
import { toast } from 'react-hot-toast'
import { LoadingIcon } from "./icons"
import axios from 'axios'


const ForgetPassword = ({ setForget }) => {
    const [loading, setLoading] = useState(false)
    const { register, formState: { errors }, handleSubmit } = useForm()
    const onSubmit = handleSubmit(async (formData) => {
        try {
            setLoading(true)
            const { data } = await axios.get(`/api/User/ForgetPassword?Email=${formData.email}`)
            toast.success(`${data}, Please check your email`)
            setLoading(false)
            setForget(false)
        } catch (error) {
            toast.error(error?.response?.data?.message || 'There is an Error')
            setLoading(false)
            console.error(error);
        }
    })
    return (
        <form onSubmit={onSubmit} className='card-services rounded-3xl px-5 py-5 w-full'>
            <div className='text-center my-3'>
                <h3 className='text-[#546E7A] text-3xl font-bold'>Forget password</h3>
            </div>
            <div className='space-y-7 py-5 px-5 lg:px-0'>
                <div >
                    <input
                        {...register("email", { required: "The Email is required." })}
                        type="email"
                        className='py-2 px-2 bg-inputColor border card-services rounded-full w-full placeholder:font-bold outline-none'
                        placeholder='Email'
                    />
                    <ErrorMsg message={errors?.email?.message} />
                </div>
            </div>
            <div className='flex flex-col items-center my-3'>

                <button disabled={loading} className={clsx(
                    'px-10 py-2 rounded-full text-white text-sm lg:text-base shadow-lg',
                    { 'btn-blue-gradient': !loading },
                    { 'bg-[#4d92b2]/70': loading }
                )}>
                    {loading ? <LoadingIcon className='animate-spin w-6 h-6' /> : 'Submit'}
                </button>
            </div>
        </form>
    )
}
ForgetPassword.propTypes = {
    setForget: PropTypes.func,
}

export default ForgetPassword