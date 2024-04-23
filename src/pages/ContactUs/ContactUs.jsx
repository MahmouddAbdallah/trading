import { useForm } from 'react-hook-form'
import hero from '../../assets/contact-hero.jpg'
import { EmailIcon, LoadingIcon, PhoneIcon } from '../../components/icons'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import ErrorMsg from '../../components/ErrorMsg'
const ContactUs = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [loading, setLoading] = useState(false)

    const onSubmit = handleSubmit(async (formData) => {
        try {
            setLoading(true)
            await axios.post('/api/TicketSupport/ContactInfo', {
                fullName: `${formData.first_name} ${formData.last_name}`,
                userEmail: formData.email,
                phoneNumber: formData.phone,
                message: formData.message
            })
            toast.success('Succeffully submitted!!')
            reset()
            setLoading(false)
        } catch (error) {
            toast.error(error?.response?.data?.message || 'There is an Error')
            setLoading(false)
            console.error(error);
        }
    })
    return (
        <>
            <div className=" py-10 lg:py-20 relative flex items-center">
                <h4 className='absolute right-10 md:right-32 lg:right-56  text-[#003966] text-2xl md:text-3xl lg:text-5xl font-semibold'>Contact Us</h4>
                <img className='w-full h-[200px] lg:h-[430px]' src={hero} alt="" />
            </div>
            <section >
                <div className='p-container pt-10 pb-20'>
                    <div className="grid grid-cols-12 lg:gap-10">
                        <div className="col-span-12 lg:col-span-4 space-y-5">
                            <div className='space-y-4'>
                                <h4 className='font-Roboto font-semibold text-4xl md:text-5xl lg:text-5xl text-blueText'>Let&lsquo;s talk with us</h4>
                                <p className='text-[#285D89]'>
                                    Questions, comments, or suggestions? Simply fill in the form and we’ll be in touch shortly.
                                </p>
                            </div>
                            <ul className='space-y-2'>
                                {/* <li className='flex gap-3'>
                                    <LocationIcon className={'w-6 h-6'} />
                                    <span className='text-lg text-[#004060] font-bold'>
                                        1055 Arthur ave Elk Groot, 67.
                                        New Palmas South Carolina.
                                    </span>
                                </li> */}
                                <li className='flex gap-3'>
                                    <PhoneIcon className={'w-6 h-6'} />
                                    <span className='text-lg text-[#004060] font-bold'>
                                        01149507221
                                    </span>
                                </li>
                                <li className='flex gap-3'>
                                    <EmailIcon className={'w-6 h-6'} />
                                    <span className='text-lg text-[#004060] font-bold'>
                                        info@trading-business-academy.com
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className='col-span-12 lg:col-span-2' />
                        <div className="col-span-12 lg:col-span-6 mt-10 lg:mt-0">
                            <form onSubmit={onSubmit} className='card-services rounded-3xl px-6 py-6 w-full space-y-5'>
                                <div className='space-y-6'>
                                    <div className='flex gap-5'>
                                        <div>
                                            <input
                                                type="text"
                                                {...register('first_name', { required: 'Please enter first name' })}
                                                placeholder='First Name'
                                                className='inputInnerStyle'
                                            />
                                            <ErrorMsg message={errors?.first_name?.message} />
                                        </div>
                                        <div>
                                            <input
                                                type="text"
                                                {...register('last_name', { required: 'Please enter last name' })}
                                                placeholder='Last Name*'
                                                className='inputInnerStyle'
                                            />
                                            <ErrorMsg message={errors?.last_name?.message} />
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            {...register('email', { required: 'Please enter email ' })}
                                            placeholder='Email*'
                                            className='inputInnerStyle'
                                        />
                                        <ErrorMsg message={errors?.email?.message} />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            {...register('phone', { required: 'Please enter phone ' })}
                                            placeholder='Phone Number*'
                                            className='inputInnerStyle'
                                        />
                                        <ErrorMsg message={errors?.phone?.message} />
                                    </div>
                                    <div>
                                        <textarea
                                            placeholder='Your message...'
                                            {...register('message', { required: 'Please enter message ' })}
                                            className='h-32 rounded-xl resize-none  py-2 px-2 bg-inputColor border innerShadow w-full placeholder:text-inputPlaceholder placeholder:font-semibold outline-none'>
                                        </textarea>
                                        <ErrorMsg message={errors?.message?.message} />
                                    </div>
                                </div>
                                <button
                                    className={'btn-blue-gradient w-full px-10 py-3 rounded-full text-white text-sm lg:text-base card-services flex justify-center items-center'}>
                                    {loading ? <LoadingIcon className='animate-spin w-6 h-6' /> : 'SEND MESSAGE'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs