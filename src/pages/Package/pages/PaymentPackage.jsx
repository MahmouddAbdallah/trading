import Checkout from "../component/Checkout"
import paymentpage from '../../../assets/paymentpage.png'
// import { PayPalIcon, PaymentIcon } from "../../../components/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { LoadingIcon } from "../../../components/icons";
import { UseAppContext } from "../../../context/appContext";

const PaymentPackage = () => {
    const { cart } = UseAppContext();
    const [checked, setChecked] = useState(false)
    const [token, setToken] = useState("")
    const [vaild, setVaild] = useState(true)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [able, setAble] = useState(false)

    const checkTokenStatus = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get(`/api/User/CheckTokenStatus?tokenNumber=${token}`)
            setVaild(data)
            setError("")
            setAble(true)
            setLoading(false)
        } catch (error) {
            setError(error?.response?.data || 'There is an Error')
            setVaild(true)
            setAble(false)
            setLoading(false)
            console.error(error);
        }
    }

    return (
        <div className=" p-container ">
            {cart?.length ?
                <div className="">
                    <div className="py-10 flex justify-center">
                        <img src={paymentpage} alt="" />
                    </div>
                    <div className=" py-10 grid grid-cols-12 lg:gap-10">
                        <div className="col-span-12 lg:col-span-7">
                            <div className="space-y-5">
                                {/* <div className="flex gap-5">
                                    <div className="bg-white w-full rounded-md flex justify-between items-center px-5">
                                        <label className="flex items-center py-5 gap-3">
                                            <input type="radio" className="w-5 h-5" />
                                            <span className="font-light">
                                                use my sign up balance
                                            </span>
                                        </label>
                                        <div>
                                            <PaymentIcon />
                                        </div>
                                    </div>
                                    <button className="text-[#458DAE] bg-[#93B9CD] text-xl py-5 px-7 rounded-md">
                                        +
                                    </button>
                                </div> */}
                                <div className="space-y-3">
                                    <div className="bg-white w-full rounded-md flex justify-between items-center px-5">
                                        <label className="flex items-center py-5 gap-3">
                                            <input
                                                type="radio"
                                                checked={checked}
                                                onChange={() => { setChecked(!checked) }}
                                                className="w-5 h-5" />
                                            <span className="font-bold">
                                                {/* <PayPalIcon /> */}
                                                Pay by token
                                            </span>
                                        </label>
                                    </div>
                                    {checked &&
                                        <div>
                                            <div className="w-full flex items-center gap-3">
                                                <label className="w-full flex items-center gap-2">
                                                    <span className="font-semibold whitespace-nowrap">Token : </span>
                                                    <input
                                                        type="text"
                                                        value={token}
                                                        onChange={(e) => { setToken(e.target.value) }}
                                                        className="w-full py-2 px-2 rounded-md outline-none focus:border border-blue-500"
                                                    />
                                                </label>
                                                <button
                                                    onClick={checkTokenStatus}
                                                    className="py-2 px-5 rounded-md bg-blue-500 text-white">
                                                    {loading ? <LoadingIcon className='animate-spin w-6 h-6' /> : 'Search'}
                                                </button>

                                            </div>
                                            {error &&
                                                <div className=" py-2 px-3 text-red-500">
                                                    {error}
                                                </div>
                                            }
                                            {vaild == false &&
                                                <div className=" py-2 px-3 text-green-500">
                                                    Vaild Token
                                                </div>
                                            }
                                        </div>
                                    }
                                </div>
                                <Link to='/package/checkout' className="block my-3 text-[#458DAE]">
                                    Return to checkout
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-5 mt-10 lg:mt-0">
                            <Checkout able={able} token={token} />
                        </div>
                    </div>
                </div>
                :
                <div className="w-full py-44 flex justify-center items-center">
                    <span className="text-5xl font-medium">
                        There is no data
                    </span>
                </div>
            }
        </div>
    )
}

export default PaymentPackage