import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slide from './Slide';
import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slide2.png';
import slide3 from '../../assets/slide3.png';

const Slider = () => {
    const slider = [
        <Slide
            key={1}
            title={'The best for the Trading.'}
            text={'Offering comprehensive educational courses aimed at helping individuals gain knowledge and attain financial wealth.'}
            img={slide1}
        />,
        <Slide
            key={1}
            title={'Profit from trading.'}
            text={'Ensuring our training courses are delivered in an advanced and engaging manner, as they are crucial not only for personal development but also for achieving financial success.'}
            img={slide2}
        />,
        <Slide
            key={1}
            title={'Trade for gain.'}
            text={'Training participants to navigate and engage effectively in various financial markets, while also preparing skilled professionals in digital currencies, foreign exchange, marketing, and other online business fields'}
            img={slide3}
        />,
    ]

    return (
        <div className='relative overflow-hidden'>
            <div>
                <Swiper
                    spaceBetween={0}
                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                    pagination={{ el: ".pclic", clickable: true }}
                    navigation={{ nextEl: ".next" }}
                    autoplay={
                        { delay: 4000 }
                    }
                    className=''
                >
                    {slider.map((item, i) => {
                        return (
                            <SwiperSlide key={i} className='w-full'>
                                {item}
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div className='z-50 bg-white flex justify-center relative'>
                    <span className="pclic absolute flex justify-center gap-3 *:cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default Slider