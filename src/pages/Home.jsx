import Footer from '../components/Footer'
import Header from '../components/Header'
import Missions from '../components/Missions'
import Services from '../components/Services'
import Vissions from '../components/Vissions'
import WhyTrading from '../components/WhyTrading'

const Home = () => {
    return (
        <>
            <Header />
            <Services />
            <WhyTrading />
            <Vissions />
            <Missions />
            <Footer />
        </>
    )
}

export default Home