import img1 from '../../assets/ser1.gif'
import img2 from '../../assets/ser2.gif'
import img3 from '../../assets/ser3.gif'
import WhySection from '../../assets/WhySection.png'
import ServicesSlides from '../../components/ServicesSlides/ServicesSlides'

const Services = () => {
  const services = [
    {
      img: img1,
      title: 'Online Courses',
      desc: 'Online courses on trading offer comprehensive instruction on various aspects of financial markets, equipping learners with knowledge of strategies'
    },
    {
      img: img2,
      title: 'Offline Courses',
      desc: 'Offline courses on trading provide hands-on learning experiences through in-person instruction, workshops, and mentorship'
    },
    {
      img: img3,
      title: 'Group Signal',
      desc: 'Signal groups in trading are online communities where traders share real-time buy or sell signals, market analysis, and insights'
    }
  ]
  return (
    <div className="p-container pt-20 pb-10 relative">
      <ServicesSlides />
      <section className='pt-44 pb-10'>
        <div className='xl:px-10'>
          <ul className='flex flex-wrap sm:grid grid-cols-6 gap-40 sm:gap-20 lg:gap-24 xl:gap-28'>
            {services.map(item => (
              <li key={item.img} className=' sm:col-span-3 xl:col-span-2 bg-bgColor'>
                <div className='border py-20 px-5 shadow-lg rounded-xl flex flex-col items-center relative card-services h-full'>
                  <div className='absolute -top-24'>
                    <img className='w-44' src={item.img} alt="" />
                  </div>
                  <div className='flex  flex-col items-start px-5'>
                    <h6 className='font-bold text-center text-xl my-3'>----- {item.title}</h6>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className='absolute -z-10 left-0 bottom-[50px] hidden lg:block'>
        <img src={WhySection} className='w-28' alt="" />
      </div>
    </div>
  )
}

export default Services