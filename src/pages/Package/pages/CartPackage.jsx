import { UsePackageContext } from "../context/appPackageContext"

const CartPackage = () => {
    const { cart } = UsePackageContext();
    const sumMoney = () => {
        let total = 0;
        cart?.forEach(element => {
            total += element.price
        });
        return total;
    }

    return (
        <div className=" p-container ">
            <div className="flex flex-col-reverse lg:grid grid-cols-12 gap-10 py-20">
                <div className="col-span-8 space-y-10">
                    {cart?.map((cart) => {
                        return (
                            <div key={cart.id}>
                                <div className="rounded-3xl card-services py-8 px-6">
                                    <div className="flex flex-col lg:flex-row gap-5">
                                        <div className="lg:w-[40%]">
                                            <img src={cart.url} className="rounded-md w-full " alt="" />
                                        </div>
                                        <div className="">
                                            <h4 className='text-xl lg:text-xl text-[#223F4A] font-medium'>
                                                {cart?.name}
                                            </h4>
                                            <span className='block text-black'>
                                                $ {cart?.price}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="col-span-4 space-y-10">
                    <div className="p-10 rounded-3xl card-services space-y-3">
                        <div className="space-y-3">
                            <div className="flex gap-2">
                                <h6 className="text-xl font-medium">Total Pirce : </h6>
                                <span className="font-bold text-3xl">{sumMoney()}</span>
                            </div>
                        </div>
                        <div className="pt-5 space-y-3">
                            <button
                                className="w-full text-sm card-services btn-blue-gradient py-3 rounded-full tracking-widest text-white font-medium">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPackage