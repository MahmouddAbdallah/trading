import img1 from '../assets/LiveTrading.png'
import img2 from '../assets/OfflineMeting.png'
import img3 from '../assets/SignalCramp.png'
const Services = () => {
    const services = [
        {
            img: img1,
            title: 'Live trading',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi epudiandae raesentium optio, eaque rerum!'
        },
        {
            img: img2,
            title: 'Offline meting',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi epudiandae raesentium optio, eaque rerum!'
        },
        {
            img: img3,
            title: 'Signal Cramp',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi epudiandae raesentium optio, eaque rerum!'
        }
    ]
    return (
        <section className='p-container py-5'>
            <div className="text-center mb-36 lg:mb-44">
                <h3 className='text-blueText text-5xl font-Raleway font-semibold'>
                    Services
                </h3>
            </div>
            <div className='xl:px-10'>
                <ul className='flex flex-wrap sm:grid grid-cols-6 gap-40 sm:gap-20 lg:gap-24 xl:gap-28'>
                    {services.map(item => (
                        <li key={item.img} className=' sm:col-span-3 xl:col-span-2 bg-bgColor'>
                            <div className='border py-20 px-5 shadow-lg rounded-xl flex flex-col items-center relative card-services'>
                                <div className='absolute -top-24'>
                                    <img className='w-44' src={item.img} alt="" />
                                </div>
                                <div>
                                    <h6 className='font-bold text-center text-xl my-3'>----- {item.title}</h6>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Services