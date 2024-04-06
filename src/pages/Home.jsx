import { lazy, Suspense } from 'react'
import Header from '../components/Header'
import Missions from '../components/Missions'
import Services from '../components/Services'
const Slider = lazy(() => import('../components/Slider/Slider'))
import Vissions from '../components/Vissions'
import WhyTrading from '../components/WhyTrading'

const Home = () => {
    return (
        <>
            <Header />
            <Services />
            <WhyTrading />
            <Vissions />
            <Suspense fallback={<div className='flex justify-center'><h1>Loading.....</h1></div>}>
                <Slider />
            </Suspense>
            <Missions />
        </>
    )
}

export default Home