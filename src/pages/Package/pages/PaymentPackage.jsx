import Checkout from "../component/Checkout"
import { UsePackageContext } from "../context/appPackageContext";
import paymentpage from '../../../assets/paymentpage.png'
import { PayPalIcon, PaymentIcon } from "../../../components/icons";
import { Link } from "react-router-dom";

const PaymentPackage = () => {
    const { cart } = UsePackageContext();

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
                                            <input type="radio" className="w-5 h-5" />
                                            <span className="font-light">
                                                Credit Cards
                                            </span>
                                        </label>
                                        <div>
                                            <PaymentIcon />
                                        </div>
                                    </div>
                                    <button className="text-[#458DAE] bg-[#93B9CD] text-xl py-5 px-7 rounded-md">
                                        +
                                    </button>
                                </div>
                                <div className="bg-white w-full rounded-md flex justify-between items-center px-5">
                                    <label className="flex items-center py-5 gap-3">
                                        <input type="radio" className="w-5 h-5" />
                                        <span className="font-light">
                                            <PayPalIcon />
                                        </span>
                                    </label>
                                </div>
                                <Link to='/package/cart' className="block my-3 text-[#458DAE]">
                                    Return to checkout
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-5 mt-10 lg:mt-0">
                            <Checkout />
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