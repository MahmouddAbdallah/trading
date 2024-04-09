import { useForm } from "react-hook-form"
const Transfer = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm()
    return (
        <div className="px-5 md:px-16 lg:pl-32 xl:pl-32 lg:pr-44 xl:pr-64">
            <div className="mb-10">
                <h4 className="font-bold text-[#546E7A] text-lg tracking-[2px]">Transfer</h4>
            </div>
            <form >
                <div className="space-y-5">
                    <label className="block space-y-2">
                        <span className="text-[#90A4AE] text-sm font-semibold">
                            From Account
                        </span>
                        <input
                            {...register('fromAccount')}
                            type="text"
                            className='inputInnerStyle'
                        />
                    </label>
                    <label className="block space-y-2">
                        <span className="text-[#90A4AE] text-sm font-semibold">
                            Balance
                        </span>
                        <input
                            placeholder="0"
                            type="text"
                            className='inputInnerStyle'
                        />
                    </label>
                    <label className="block space-y-2">
                        <span className="text-[#90A4AE] text-sm font-semibold">
                            Amount* (minimum $15)
                        </span>
                        <input
                            type="text"
                            className='inputInnerStyle'
                        />
                    </label>
                    <div className="flex justify-between items-end">
                        <label className="block space-y-2 flex-1">
                            <span className="block text-[#90A4AE] text-sm font-semibold">
                                Top Account
                            </span>
                            <input
                                placeholder="ID"
                                type="text"
                                className='py-[9px] px-3 bg-inputColor border innerShadow rounded-full placeholder:text-inputPlaceholder placeholder:font-semibold outline-none w-[80%]'
                            />
                        </label>
                        <button className="text-sm card-services btn-blue-gradient px-10 py-[10px] rounded-full tracking-widest text-white font-medium">SEARCH</button>
                    </div>
                </div>
                <div className="mt-10 space-x-10">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            reset()
                        }}
                        className="text-sm card-services btn-blue-gradient px-10 py-3 rounded-full tracking-widest text-white font-medium"
                    >
                        CANCEL
                    </button>
                    <button className="text-sm card-services btn-blue-gradient px-10 py-3 rounded-full tracking-widest text-white font-medium">
                        TRANSFER
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Transfer