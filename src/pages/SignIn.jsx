import { Link } from 'react-router-dom'
import hero from '../assets/SignIn.png'
import { useForm } from 'react-hook-form'
import ErrorMsg from '../components/ErrorMsg'
import axios from 'axios'
import toast from 'react-hot-toast'

const SingIn = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const onSubmit = handleSubmit(async (formData) => {
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/User/login`, {
                email: formData.email,
                password: formData.password
            })
            console.log(data);
        } catch (error) {
            toast.error(error?.response?.data || 'There is an Error')
            console.error(error);
        }
    })

    return (
        <div className='p-container h-screen'>
            <div className="grid grid-cols-12 gap-0 lg:gap-20 h-full">
                <div className="hidden col-span-12 lg:col-span-8 h-full lg:flex items-center px-28">
                    <img src={hero} alt="" />
                </div>
                <div className="col-span-12 lg:col-span-4 flex items-center">
                    <form onSubmit={onSubmit} className='card-services rounded-3xl px-5 py-5 w-full'>
                        <div className='text-center my-3'>
                            <h3 className='text-[#546E7A] text-3xl font-bold'>Welcome Back</h3>
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
                            <div >
                                <input
                                    {...register("password", { required: "The password is required." })}
                                    type="password"
                                    className='py-2 px-2 bg-inputColor border card-services rounded-full w-full placeholder:font-bold outline-none'
                                    placeholder='Password' />
                                <ErrorMsg message={errors?.password?.message} />
                            </div>
                        </div>
                        <div className='flex flex-col items-center my-3'>
                            <div className='mb-5 text-center text-[#546E7A]'>
                                <span className='text-xs block'>
                                    New here?
                                    <Link to={'/sign-up'} className='underline mx-1'>
                                        Create account
                                    </Link>
                                </span>
                                <span className='text-xs block'>
                                    Forgot your password?
                                </span>
                            </div>
                            <button className='btn-blue-gradient px-10 py-2 rounded-full text-white text-sm lg:text-base shadow-lg'>
                                SIGN IN
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SingIn