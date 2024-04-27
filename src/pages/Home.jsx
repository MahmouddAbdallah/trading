import { lazy, Suspense } from 'react'
import Header from '../components/Header'
import Services from '../components/Services'
import { LoadingIcon } from '../components/icons'
const Slider = lazy(() => import('../components/Slider/Slider'))
import Vissions from '../components/Vissions'
import About from '../components/About'
import HomePackAndInstrutors from '../components/HomePackAndInstrutors'

const Home = () => {
    return (
        <>
            <Header />
            <Services />
            <About />
            <Suspense fallback={
                <div className='flex justify-center pt-52'>
                    <LoadingIcon className='animate-spin w-8 h-8' />
                </div>}>
                <Slider />
            </Suspense>
            <Vissions />
            <HomePackAndInstrutors />
        </>
    )
}

export default Home