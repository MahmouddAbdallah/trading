import hero from '../assets/SignIn.png'
import { useForm } from 'react-hook-form'
import ErrorMsg from '../components/ErrorMsg'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import OptionCountries from '../components/OptionCountries'
import toast from 'react-hot-toast'
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom'
import { LoadingIcon } from '../components/icons'

const SignUp = () => {
    const { register, setValue, formState: { errors }, handleSubmit } = useForm();
    const [sponserId, setSponserId] = useState("")
    const [error, setError] = useState(false)
    const [sponser, setSponser] = useState(null)
    const [open, setOpen] = useState(false)
    const [able, setAble] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const searchSponser = useCallback(async () => {
        try {
            const { data } = await axios.get(`/api/User/${sponserId}`)
            setSponser(data)
            setOpen(true)
        } catch (error) {
            toast.error(error?.response?.data || 'There is an Error')
            setSponser(null)
            setOpen(false)
            console.error(error);
        }
    }, [sponserId])

    useEffect(() => {
        if (sponserId?.length > 4) {
            searchSponser()
        }
    }, [searchSponser, sponserId?.length])

    const onSubmit = handleSubmit(async (formData) => {
        try {
            if (formData.sponserId) {
                setLoading(true)
                const { data } = await axios.post(`/api/User/NewSignup`, {
                    name: formData.firstName + ' ' + formData.lastName,
                    phoneNumber: formData.phone,
                    countryId: formData.country,
                    nationalId: formData.Id,
                    email: formData.email,
                    sponsorId: formData.sponserId
                })
                console.log(data);
                setLoading(false)
                toast.success('User signed up successfully!')
                navigate("/sign-in")
            } else {
                setError(true)
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || 'There is an Error')
            setLoading(false)
            console.error(error);
        }
    })

    return (
        <div className='p-container h-screen'>
            <div className="grid grid-cols-12 gap-0 lg:gap-20 h-full">
                <div className="hidden col-span-12 lg:col-span-6 h-full lg:flex items-center">
                    <img src={hero} alt="" />
                </div>
                <div className="col-span-12 lg:col-span-6 flex items-center">
                    <form onSubmit={onSubmit} className='card-services rounded-3xl px-5 py-5 w-full font-Raleway'>
                        <div className='text-center my-3'>
                            <h3 className='text-[#546E7A] text-3xl font-bold'>Welcome</h3>
                        </div>
                        <div className='space-y-7 py-5 px-5 lg:px-0'>
                            <div className='flex flex-wrap sm:flex-nowrap gap-5'>
                                <div className='w-full'>
                                    <div className=''>
                                        <input
                                            type="text"
                                            value={sponserId}
                                            disabled={open == false && sponser}
                                            className={clsx(
                                                'inputStyle',
                                                { 'text-black/40 font-bold': sponser }
                                            )}
                                            onChange={(e) => {
                                                setSponserId(e.target.value)
                                                setError(false)
                                            }}
                                            placeholder='Sponser ID'
                                        />
                                        <div className='relative'>
                                            {
                                                (open) &&
                                                <div className='absolute w-full'>
                                                    <div className='bg-white w-full z-10 py-5 rounded-xl'>
                                                        <button
                                                            onClick={(e) => {
                                                                e.preventDefault()
                                                                setValue('sponserId', sponser?.customerAttributeId)
                                                                setSponser(true)
                                                                setOpen(false)
                                                                setAble(true)
                                                            }}
                                                            className='flex flex-col w-full px-5'>
                                                            <span className='font-semibold'>{sponser?.name}</span>
                                                            <span className='text-xs block text-black/20'>{sponser?.phone}</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            }
                                            {error && <ErrorMsg message={'The sponser is required.'} />}
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <input
                                        type="email"
                                        {...register("email", { required: "Email is required." })}
                                        disabled={!able}
                                        className={clsx(
                                            { 'inputStyle': able },
                                            { 'inputStyleDisable': !able }
                                        )}
                                        placeholder='Email' />
                                    <ErrorMsg message={errors?.email?.message} />
                                </div>
                            </div>
                            <div className='flex flex-wrap sm:flex-nowrap gap-5'>
                                <div className='w-full'>
                                    <input
                                        type="text"
                                        disabled={sponser || !able}
                                        className={clsx(
                                            { 'inputStyle disabled:text-black/40 disabled:font-bold': able },
                                            { 'inputStyleDisable': !able }
                                        )}
                                        value={sponser?.name}
                                        placeholder='Your Sponser Name' />
                                    <ErrorMsg message={errors?.sponserName?.message} />
                                </div>
                                <div className='w-full'>
                                    <input
                                        type="text"
                                        {...register("phone", { required: "The phone is required." })}
                                        disabled={!able}
                                        className={clsx(
                                            { 'inputStyle': able },
                                            { 'inputStyleDisable': !able }
                                        )}
                                        placeholder='Phone Number ' />
                                    <ErrorMsg message={errors?.phone?.message} />
                                </div>
                            </div>
                            <div className='flex flex-wrap sm:flex-nowrap gap-5'>
                                <div className='w-full'>
                                    <input
                                        type="text"
                                        {...register("firstName", { required: "First name is required." })}
                                        disabled={!able}
                                        className={clsx(
                                            { 'inputStyle': able },
                                            { 'inputStyleDisable': !able }
                                        )}
                                        placeholder='First Name' />
                                    <ErrorMsg message={errors?.firstName?.message} />
                                </div>
                                <div className='w-full'>
                                    <select
                                        type="text"
                                        {...register("country", { required: "Your country is required." })}
                                        disabled={!able}
                                        className={clsx(
                                            { 'py-2 px-2 bg-inputColor border card-services rounded-full w-full text-black/50 font-semibold outline-none': able },
                                            { 'selectStyleDisable': !able }
                                        )}
                                    >
                                        <OptionCountries />
                                    </select>
                                    <ErrorMsg message={errors?.country?.message} />
                                </div>
                            </div>
                            <div className='flex flex-wrap sm:flex-nowrap gap-5'>
                                <div className='w-full'>
                                    <input
                                        type="text"
                                        {...register("lastName", { required: "Last name is required." })}
                                        disabled={!able}
                                        className={clsx(
                                            { 'inputStyle': able },
                                            { 'inputStyleDisable': !able }
                                        )}
                                        placeholder='Last Name' />
                                    <ErrorMsg message={errors?.lastName?.message} />
                                </div>
                                <div className='w-full'>
                                    <input
                                        type="text"
                                        {...register("Id", { required: "Your ID is required." })}
                                        disabled={!able}
                                        className={clsx(
                                            { 'inputStyle': able },
                                            { 'inputStyleDisable': !able }
                                        )}
                                        placeholder='Your ID' />
                                    <ErrorMsg message={errors?.Id?.message} />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center my-3'>
                            <button
                                disabled={!able}
                                className={
                                    clsx({ 'btn-blue-gradient px-10 py-2 rounded-full text-white text-sm lg:text-base shadow-lg': able },
                                        { 'bg-blue-300 px-10 py-2 rounded-full text-white text-sm lg:text-base': !able })
                                }>
                                {loading ? <LoadingIcon className='animate-spin' /> : 'SIGN UP'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp