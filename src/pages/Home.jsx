import { lazy, Suspense } from 'react'
import Header from '../components/Header'
import Services from '../components/Services'
const Slider = lazy(() => import('../components/Slider/Slider'))
import Vissions from '../components/Vissions'
import About from '../components/About'

const Home = () => {
    return (
        <>
            <Header />
            <Services />
            <About />
            <Suspense fallback={<div className='flex justify-center'><h1>Loading.....</h1></div>}>
                <Slider />
            </Suspense>
            <Vissions />
        </>
    )
}

export default Home