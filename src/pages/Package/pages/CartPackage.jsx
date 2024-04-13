import cartImage from '../../../assets/cart.png'
import { useNavigate } from 'react-router-dom'
import { UseAppContext } from "../../../context/appContext"

const CartPackage = () => {
    const navigate = useNavigate()
    const { cart, setCart } = UseAppContext();

    const sumMoney = () => {
        let total = 0;
        cart?.forEach(element => {
            total += element.price
        });
        return total;
    }

    const removeToCart = (data) => {
        const item = cart.filter((item) => {
            return item.id !== data.id
        })
        console.log(item);
        localStorage.setItem("cart", JSON.stringify([...item]))
        setCart(JSON.parse(localStorage.getItem("cart") || '[]'))
    }
    return (
        <div className=" p-container ">
            {cart?.length ?
                <div>
                    <div>
                        <div className="py-10 flex justify-center">
                            <img src={cartImage} alt="" />
                        </div>
                        <div className="flex flex-col-reverse lg:grid grid-cols-12 gap-10 py-5 lg:py-20">
                            <div className="col-span-8 space-y-10">
                                {cart?.map((cart, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="rounded-3xl card-services py-8 px-6">
                                                <div className="flex flex-col lg:flex-row gap-5">
                                                    <div className="lg:w-[40%]">
                                                        <img src={cart.url} className="rounded-md w-full " alt="" />
                                                    </div>
                                                    <div className="">
                                                        <div className="">
                                                            <h4 className='text-xl lg:text-xl text-[#223F4A] font-medium'>
                                                                {cart?.name}
                                                            </h4>
                                                            <span className='block text-black'>
                                                                $ {cart?.price}
                                                            </span>
                                                        </div>
                                                        <button onClick={() => { removeToCart(cart) }} className="underline hover:text-red-500 text-xs duration-150 mt-5">
                                                            Remove from cart
                                                        </button>
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
                                            <span className="font-bold text-3xl">$ {sumMoney()}</span>
                                        </div>
                                    </div>
                                    <div className="pt-5 space-y-3">
                                        <button
                                            onClick={() => { navigate('/package/checkout') }}
                                            className="w-full text-sm card-services btn-blue-gradient py-3 rounded-full tracking-widest text-white font-medium">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> :
                <div className="w-full py-44 flex justify-center items-center">
                    <span className="text-5xl font-medium">
                        There is no cart
                    </span>
                </div>
            }
        </div>
    )
}

export default CartPackage