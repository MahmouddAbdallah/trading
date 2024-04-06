import img1 from '../../assets/LiveTrading.png'
import img2 from '../../assets/OfflineMeting.png'
import img3 from '../../assets/SignalCramp.png'
import img4 from '../../assets/services-4.png'
import img5 from '../../assets/services-5.png'
import img6 from '../../assets/services-6.png'
import img7 from '../../assets/services-7.png'
import img8 from '../../assets/services-8.png'
import img9 from '../../assets/services-9.png'
import WhySection from '../../assets/WhySection.png'
import ServicesSlides from '../../components/ServicesSlides/ServicesSlides'

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
    },
    {
      img: img4,
      title: 'Live trading',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi epudiandae raesentium optio, eaque rerum!'
    },
    {
      img: img5,
      title: 'Offline Course',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi epudiandae raesentium optio, eaque rerum!'
    },
    {
      img: img6,
      title: ' Signal Course',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi epudiandae raesentium optio, eaque rerum!'
    },
    {
      img: img7,
      title: ' Signal Course',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi epudiandae raesentium optio, eaque rerum!'
    },
    {
      img: img8,
      title: ' Signal Course',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi epudiandae raesentium optio, eaque rerum!'
    },
    {
      img: img9,
      title: ' Signal Course',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi epudiandae raesentium optio, eaque rerum!'
    },
  ]
  return (
    <div className="p-container pt-20 pb-10 relative">
      <ServicesSlides />
      <section className='pt-44 pb-10'>
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
      <div className='absolute -z-10 left-0 bottom-[850px]'>
        <img src={WhySection} className='w-28' alt="" />
      </div>
    </div>
  )
}

export default Services