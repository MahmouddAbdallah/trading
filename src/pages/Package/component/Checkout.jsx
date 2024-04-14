import { useNavigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { UseAppContext } from '../../../context/appContext';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useState } from 'react';
import { LoadingIcon } from '../../../components/icons';

const Checkout = ({ able, tokens, setToken, balance, ableBalance }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { cart, user } = UseAppContext();
    const [loadingBalance, setLoadingBalance] = useState(false)
    const [loadingToken, setLoadingToken] = useState(false)

    const sumMoney = () => {
        let total = 0;
        cart?.forEach(element => {
            total += element.price
        });
        return total;
    }
    const cartsIds = cart?.map(element => {
        return element.id
    })
    const buyPackages = async () => {
        try {
            setLoadingToken(true)
            const { data } = await axios.post('/api/User/BuyPackageByTonkens',
                {
                    tokens: tokens,
                    packagesIds: cartsIds,
                    customerAttributeId: user?.customerAttributeId
                }
            )
            setLoadingToken(false)
            setToken([""])
            navigate("/successfully")
            toast.success(data.message || 'Successfully!!');
        } catch (error) {
            toast.error(error?.response?.data || 'There is an Error')
            console.error(error);
        }
    }

    const buyByBalance = async () => {
        try {
            setLoadingBalance(true)
            const { data } = await axios.post('/api/User/BuyPackageUsingSignupBalance',
                {
                    packagesIds: cartsIds,
                    customerAttributeId: user?.customerAttributeId
                }
            )
            setLoadingBalance(false)
            navigate("/successfully")
            toast.success(data.message || 'Successfully!!');
        } catch (error) {
            toast.error(error?.response?.data || 'There is an Error')
            console.error(error);
        }
    }
    return (
        <div className="p-10 rounded-3xl card-services space-y-3">
            <div>
                <h4 className="text-xl lg:text-3xl font-medium">Your Order</h4>
            </div>
            <div>
                {cart?.map((cart, index) => {
                    return (
                        <div key={index}>
                            <div className="flex gap-3 py-3 border-b-2 border-gray-300">
                                <div>
                                    <img className="rounded-md w-44" src={cart.url} alt="" />
                                </div>
                                <div>
                                    <span>{cart.name}</span>
                                    <span className='block'>${cart.price}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* <div className="flex gap-8">
                <input
                    placeholder="discount code"
                    type="text"
                    className="w-full py-3 px-2 rounded-md outline-none border border-black/20 bg-transparent"
                />
                <button className="py-3 px-10 rounded-md outline-none border border-[#448CAE] bg-transparent text-[#448CAE]">
                    Apply
                </button>
            </div> */}
            <div className="pt-10 lg:space-y-5">
                <div className="p-10 rounded-3xl card-services space-y-3">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                            <h6 className="text-xl font-medium">Grand Total </h6>
                            <span className="font-bold text-xl">$ {sumMoney()}</span>
                        </div>
                    </div>
                </div>
                <div className="pt-5 space-y-3">
                    {
                        pathname.includes("checkout") ?
                            <button
                                onClick={() => { navigate('/package/payment') }}
                                className="w-full text-sm card-services btn-blue-gradient py-3 rounded-full tracking-widest text-white font-medium">
                                Continue to Pay
                            </button>
                            :
                            balance == 'balance' ?
                                <button
                                    disabled={!ableBalance}
                                    onClick={buyByBalance}
                                    className="w-full text-sm card-services bg-[#478EB0] disabled:bg-[#478EB0]/50 py-3 rounded-full tracking-widest text-white font-medium flex justify-center">
                                    {loadingBalance ? <LoadingIcon className='animate-spin w-6 h-6' /> : 'Pay'}
                                </button>
                                :
                                <button
                                    disabled={!able}
                                    onClick={buyPackages}
                                    className="w-full text-sm card-services bg-[#478EB0] disabled:bg-[#478EB0]/50 py-3 rounded-full tracking-widest text-white font-medium flex justify-center">
                                    {loadingToken ? <LoadingIcon className='animate-spin w-6 h-6' /> : 'Pay'}
                                </button>
                    }
                </div>
            </div>
        </div>
    )
}

Checkout.propTypes = {
    able: PropTypes.bool,
    tokens: PropTypes.array,
    balance: PropTypes.string,
    setToken: PropTypes.func,
    ableBalance: PropTypes.bool
}
export default Checkout