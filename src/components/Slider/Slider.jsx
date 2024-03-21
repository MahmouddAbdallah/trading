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
            text={'Trading in financial markets involves buying and selling assets such as stocks, currencies, and commodities with the aim of capitalizing on market fluctuations to generate profits."'}
            img={slide1}
        />,
        <Slide
            key={1}
            title={'Profit from trading.'}
            text={'Trading is a dynamic process where individuals or entities engage in the buying and selling of financial instruments, leveraging market trends and analysis to achieve financial objectives and maximize returns."'}
            img={slide2}
        />,
        <Slide
            key={1}
            title={'Trade for gain.'}
            text={'Trading encompasses the strategic exchange of financial instruments, where investors capitalize on market movements to achieve desired outcomes and optimize their investment portfolios."'}
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