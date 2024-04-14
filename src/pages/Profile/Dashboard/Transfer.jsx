import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { UseAppContext } from "../../../context/appContext"
import { toast } from "react-hot-toast"
import ErrorMsg from "../../../components/ErrorMsg"
import { LoadingIcon } from "../../../components/icons"
const Transfer = () => {
    const { register, setValue, reset, handleSubmit, formState: { errors } } = useForm()
    const { user, balance } = UseAppContext()
    const [sponserId, setSponserId] = useState('')
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loadingSearch, setloadingSearch] = useState(false)
    const [able, setAble] = useState(false)
    const [userSponserId, setUserSponserId] = useState({})


    const getUser = async (e) => {
        try {
            e.preventDefault()
            setloadingSearch(true)
            const { data } = await axios.get(`/api/User/${sponserId}`)
            setloadingSearch(false)
            setOpen(true)
            setUserSponserId(data)
        } catch (error) {
            setUserSponserId({})
            setloadingSearch(false)
            setOpen(true)
            console.error(error);
        }
    }


    const transferMoney = handleSubmit(async (formData) => {
        try {
            if (formData.userSponserId) {
                setLoading(true)
                console.log(formData);
                const { data } = await axios.post('/api/BankController/TransferMoney', {
                    customerTransferId: user.customerAttributeId,
                    customerTransferBackOfficeId: user?.referId,
                    customerReceivedId: userSponserId?.customerAttributeId,
                    customerReceivedBackOfficeId: userSponserId?.backOfficeId,
                    amount: formData.amount
                })
                toast.success(data);
                setLoading(false)
                setSponserId("")
                window.location.reload();
            } else {
                reset()
                setSponserId("")
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || 'There is an Error')
            setLoading(false)
            console.error(error);
        }
    })

    return (
        <div className="px-5 md:px-16 lg:pl-32 xl:pl-32 lg:pr-44 xl:pr-64">
            <div className="mb-10">
                <h4 className="font-bold text-[#546E7A] text-lg tracking-[2px]">Transfer</h4>
            </div>
            <form onSubmit={transferMoney} >
                <div className="space-y-5">
                    <div>
                        <label className="block space-y-2">
                            <span className="text-[#90A4AE] text-sm font-semibold">
                                From Account
                            </span>
                            <input
                                disabled
                                type="text"
                                value={user?.referId}
                                className='inputInnerStyle'
                            />
                        </label>
                    </div>
                    <label className="block space-y-2">
                        <span className="text-[#90A4AE] text-sm font-semibold">
                            Balance
                        </span>
                        <input
                            placeholder="0"
                            disabled
                            value={balance}
                            type="text"
                            className='inputInnerStyle'
                        />
                    </label>
                    <label className="block space-y-2">
                        <span className="text-[#90A4AE] text-sm font-semibold">
                            Amount* (minimum $15)
                        </span>
                        <input
                            type="number"
                            {...register("amount", {
                                required: 'Please Enter the amount',
                                validate: (value) => {
                                    if (value <= 14) {
                                        return 'Please Enter an amount greater than 15';
                                    }
                                }
                            })}
                            className='inputInnerStyle'
                        />
                        <ErrorMsg message={errors?.amount?.message} />
                    </label>
                    <div className="flex justify-between items-end">
                        <div className="w-full relative">
                            <label className="block space-y-2 ">
                                <span className="block text-[#90A4AE] text-sm font-semibold">
                                    Top Account
                                </span>
                                <input
                                    placeholder="ID"
                                    value={sponserId}
                                    disabled={able}
                                    onChange={(e) => {
                                        setSponserId(e.target.value)
                                        setOpen(false);
                                    }}
                                    type="text"
                                    className='py-[9px] px-3 bg-inputColor border innerShadow rounded-full disabled:font-medium placeholder:text-inputPlaceholder placeholder:font-semibold outline-none w-[80%]'
                                />
                            </label>
                            <div className="absolute w-[80%]">
                                {open ?
                                    userSponserId?.name ?
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setValue('userSponserId', userSponserId)
                                                setOpen(false)
                                                setAble(true)
                                            }}
                                            className="w-full bg-white rounded-b-xl px-3 py-2">
                                            <div className="flex items-center gap-3 py-2">
                                                <div className="flex justify-center items-center font-bold h-8 w-8 rounded-full text-white bg-blue-500">
                                                    {userSponserId?.name?.split("")[0]}
                                                </div>
                                                <div>
                                                    <h4>{userSponserId.name}</h4>
                                                </div>
                                            </div>
                                        </button>
                                        :
                                        <div className="w-full bg-white rounded-b-xl px-3 py-2">
                                            No Data Available
                                        </div>
                                    : ""
                                }
                            </div>
                        </div>
                        <button
                            disabled={loadingSearch}
                            onClick={getUser}
                            className="text-sm card-services bg-[#478EB0] disabled:bg-[#478EB0]/50 px-10 py-[10px] rounded-full tracking-widest text-white font-medium">
                            {loadingSearch ? <LoadingIcon className='animate-spin w-5 h-5' /> : 'SEARCH'}
                        </button>
                    </div>
                </div>
                <div className="mt-10 space-x-10">
                    <button
                        disabled={loading}
                        onClick={(e) => {
                            e.preventDefault();
                            reset()
                        }}
                        className="text-sm card-services bg-[#478EB0] disabled:bg-[#478EB0]/50 px-10 py-3 rounded-full tracking-widest text-white font-medium"
                    >
                        CANCEL
                    </button>
                    <button
                        disabled={loading}
                        className="text-sm card-services bg-[#478EB0] disabled:bg-[#478EB0]/50 px-10 py-3 rounded-full tracking-widest text-white font-medium">
                        {loading ? <LoadingIcon className='animate-spin w-5 h-5' /> : 'TRANSFER'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Transfer