import { UsePackageContext } from "../context/appPackageContext"
import checkoutImage from '../../../assets/checkout.png'
import Checkout from "../component/Checkout";

const CheckoutPackage = () => {
    const { cart } = UsePackageContext();

    return (
        <div className=" p-container ">
            {cart?.length ?
                <div className="flex justify-center">
                    <div className="lg:w-[75%]">
                        <div className="py-10 flex justify-center">
                            <img src={checkoutImage} alt="" />
                        </div>
                        <div className=" py-20">
                            <Checkout />
                        </div>
                    </div>
                </div> :
                <div className="w-full py-44 flex justify-center items-center">
                    <span className="text-5xl font-medium">
                        There is no data
                    </span>
                </div>
            }
        </div>
    )
}

export default CheckoutPackage