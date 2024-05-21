import { UseAppContext } from "../../../context/appContext"
import Package from '../../../components/Package'
import { Navigate, useNavigate } from 'react-router-dom'

const PreviewPackage = () => {
    const navigate = useNavigate()
    const { previewPackage, packages, setCart, cart } = UseAppContext()
    const addToCart = () => {
        localStorage.setItem("cart", JSON.stringify([...cart, previewPackage]))
        setCart(JSON.parse(localStorage.getItem("cart") || '[]'))
        navigate('/package/cart')
    }
    if (!previewPackage) {
        return <Navigate to={'/package'} />
    }
    return (
        <div className="p-container py-16 lg:py-20">
            <div className="grid grid-cols-12 lg:gap-10">
                <div className="col-span-12 lg:col-span-6 lg:mr-10">
                    <div >
                        <img className="w-full rounded-xl" src={previewPackage?.url} alt="" />
                    </div>
                    <div className="py-5">
                        <h4 className='text-xl lg:text-3xl text-[#223F4A] font-medium'>
                            {previewPackage?.name}
                        </h4>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                    <div className="p-10 rounded-3xl card-services space-y-3">
                        <div>
                            <span className="block text-black font-medium">$ {previewPackage?.price}</span>
                            <span className="block text-xs text-black/50 ">last price $ 1410,87</span>
                        </div>
                        <div className="space-y-3">
                            <label className="flex gap-2 items-center">
                                <input
                                    className="w-5 h-5"
                                    type="radio"
                                />
                                <span>Pay Now</span>
                            </label>
                            <label className="flex gap-2">
                                <input
                                    className="w-5 h-5"
                                    type="radio"
                                />
                                <span>
                                    Pay Now
                                    <br />
                                    <span className="text-xs text-black/50">
                                        choose your installments period
                                    </span>
                                </span>
                            </label>
                        </div>
                        <ul className="flex justify-between">
                            <li>
                                <button className="text-sm p-2 rounded-md border-2 border-black/20 bg-white">
                                    3
                                    <span className="block">Months</span>
                                </button>
                            </li>
                            <li>
                                <button className="text-sm p-2 rounded-md border-2 border-black/20 bg-white">
                                    6
                                    <span className="block">Months</span>
                                </button>
                            </li>
                            <li>
                                <button className="text-sm p-2 rounded-md border-2 border-black/20 bg-white">
                                    12
                                    <span className="block">Months</span>
                                </button>
                            </li>
                            <li>
                                <button className="text-sm p-2 rounded-md border-2 border-black/20 bg-white">
                                    18
                                    <span className="block">Months</span>
                                </button>
                            </li>
                        </ul>
                        <div className="pt-5 space-y-3">
                            <button
                                className="w-full text-sm card-services btn-blue-gradient py-3 rounded-full tracking-widest text-white font-medium">
                                Buy Now
                            </button>
                            <button
                                onClick={addToCart}
                                className="w-full text-sm border-2 border-[#4B91B1] py-3 rounded-full tracking-widest text-[#4B91B1] font-medium">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-20 space-y-10">
                <h3 className="font-Roboto font-medium text-xl lg:text-3xl text-blueText">
                    Similar Courses
                </h3>
                <div className="grid grid-cols-12 lg:gap-10">
                    {
                        packages?.filter(item => {
                            return item.id !== previewPackage?.id
                        })?.map((item, index) => (
                            index > 1 &&
                            <div
                                key={item.id}
                                className='col-span-12 md:col-span-6 lg:col-span-4 card-services rounded-xl overflow-hidden'
                            >
                                <Package data={item} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PreviewPackage