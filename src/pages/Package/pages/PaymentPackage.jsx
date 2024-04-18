import Checkout from "../component/Checkout"
import paymentpage from '../../../assets/paymentpage.png'
// import { PaymentIcon } from "../../../components/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { LoadingIcon } from "../../../components/icons";
import { UseAppContext } from "../../../context/appContext";

const PaymentPackage = () => {
    const { cart, balance } = UseAppContext();
    const [checked, setChecked] = useState("")
    const [token, setToken] = useState("")
    const [tokens, setTokens] = useState([])
    const [vaild, setVaild] = useState(true)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [able, setAble] = useState(false)
    const [ableBalance, setAbleBalance] = useState(false)

    const checkTokenStatus = async () => {
        try {
            setLoading(true)
            const { data } = await axios.get(`/api/User/CheckTokenStatus?tokenNumber=${token}`)
            setVaild(data?.isUsed)
            setError("")
            if (data?.isUsed == false) {
                if (tokens.includes(token)) {
                    setError('This token is already')
                } else {
                    setTokens([...tokens, token])
                }
            } else {
                setError('This token is used')
            }
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

    const newToken = () => {
        setToken('');
        setVaild(true)
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
                                <div className="flex gap-5">
                                    <div className="bg-white w-full rounded-md flex justify-between items-center px-5">
                                        <label className="flex items-center py-5 gap-3">
                                            <input
                                                onChange={() => {
                                                    setChecked("balance")
                                                    setAbleBalance(true)
                                                    setTokens([])
                                                    setToken("")
                                                    setVaild(true)
                                                    setAble(false)
                                                }}
                                                checked={checked == 'balance'}
                                                type="radio"
                                                className="w-5 h-5" />
                                            <span className="font-light">
                                                use my sign up balance
                                            </span>
                                        </label>
                                        <div>
                                            My balance : ${balance}
                                        </div>
                                    </div>

                                </div>
                                <div className="space-y-3">
                                    <div className="bg-white w-full rounded-md flex justify-between items-center px-5">
                                        <label className="flex items-center py-5 gap-3">
                                            <input
                                                type="radio"
                                                onChange={() => { setChecked("token") }}
                                                checked={checked == 'token'}
                                                className="w-5 h-5" />
                                            <span className="font-bold">
                                                {/* <PayPalIcon /> */}
                                                Pay by token
                                            </span>
                                        </label>
                                    </div>
                                    {checked == 'token' &&
                                        <div>
                                            <div className="flex gap-1 pb-1">
                                                {tokens?.map((item, i) => <span key={item} className="text-xs px-3 py-[2px] rounded-full bg-blue-100 border border-black/20">
                                                    Token {i + 1} : {item}
                                                </span>)}
                                            </div>
                                            <div className="w-full flex flex-col sm:flex-row sm:items-center gap-3">
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
                                                    className="py-2 px-5 rounded-md bg-blue-500 text-white flex justify-center">
                                                    {loading ? <LoadingIcon className='animate-spin w-6 h-6' /> : 'Search'}
                                                </button>
                                                <button
                                                    onClick={newToken}
                                                    className="py-2 px-5 rounded-md bg-blue-500 text-white whitespace-nowrap">
                                                    Add a new token
                                                </button>
                                            </div>
                                            {error &&
                                                <div className=" py-2 px-3 text-red-500">
                                                    {error}
                                                </div>
                                            }
                                            {(vaild == false && error == "") &&
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
                            <Checkout able={able} tokens={tokens} setToken={setToken} balance={checked == "balance" ? 'balance' : ""} ableBalance={ableBalance} />
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