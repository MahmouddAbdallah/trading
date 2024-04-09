import { UsePackageContext } from '../context/appPackageContext';
import { useNavigate } from 'react-router-dom'


const Checkout = () => {
    const navigate = useNavigate()
    const { cart } = UsePackageContext();

    const sumMoney = () => {
        let total = 0;
        cart?.forEach(element => {
            total += element.price
        });
        return total;
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
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex gap-8">
                <input
                    placeholder="discount code"
                    type="text"
                    className="w-full py-3 px-2 rounded-md outline-none border border-black/20 bg-transparent"
                />
                <button className="py-3 px-10 rounded-md outline-none border border-[#448CAE] bg-transparent text-[#448CAE]">
                    Apply
                </button>
            </div>
            <div className="pt-10 lg:space-y-5">
                <div className="p-10 rounded-3xl card-services space-y-3">
                    <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                            <h6 className="text-xl font-medium">Grand Total </h6>
                            <span className="font-bold text-xl">{sumMoney()}</span>
                        </div>
                    </div>
                </div>
                <div className="pt-5 space-y-3">
                    <button
                        onClick={() => { navigate('/package/payment') }}
                        className="w-full text-sm card-services btn-blue-gradient py-3 rounded-full tracking-widest text-white font-medium">
                        Continue to pay
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Checkout