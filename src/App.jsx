import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import axios from 'axios'
import Loading from './components/Loading'
import AppProvider from './context/appContext'
import { checkExpiration, setExpirationTime } from './lib/clearLocalStorage'
import VideoDetails from './pages/VideoDetails/VideoDetails'
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const ContactUs = lazy(() => import('./pages/ContactUs/ContactUs'));
const Services = lazy(() => import('./pages/Services/Services'));
const LayoutPages = lazy(() => import('./LayoutPages'));
const SignUp = lazy(() => import('./pages/SignUp'));
const SignIn = lazy(() => import('./pages/SignIn'));
const NotFound = lazy(() => import('./pages/NotFound'));
const LayoutProfile = lazy(() => import('./pages/Profile/LayoutProfile'));
const Dashboard = lazy(() => import('./pages/Profile/Dashboard'));
const Transfer = lazy(() => import('./pages/Profile/Transfer'));
const Reports = lazy(() => import('./pages/Profile/Reports'));
const HoldingTank = lazy(() => import('./pages/Profile/HoldingTank'));
const Wallet = lazy(() => import('./pages/Profile/Wallet'));
const Orders = lazy(() => import('./pages/Profile/Orders'));
const Bussiness = lazy(() => import('./pages/Profile/Bussiness'));
const Package = lazy(() => import('./pages/Package/Page'));
const PreviewPackage = lazy(() => import('./pages/Package/pages/PreviewPackage'));
const CartPackage = lazy(() => import('./pages/Package/pages/CartPackage'));
const CheckoutPackage = lazy(() => import('./pages/Package/pages/CheckoutPackage'));
const PaymentPackage = lazy(() => import('./pages/Package/pages/PaymentPackage'));
const Successfully = lazy(() => import('./pages/Successfully'));

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL
function App() {

  useEffect(() => {
    setExpirationTime();
    const intervalId = setInterval(checkExpiration, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <Suspense fallback={<Loading />}>
      <AppProvider>
        <Router>
          <Toaster position='top-right' toastOptions={{ duration: 4000 }} />
          <Routes>
            <Route path='/' element={<LayoutPages />} >
              <Route path='/' index element={<Home />} />
              <Route path='/services' element={<Services />} />
              <Route path='/contact' element={<ContactUs />} />
              <Route path='/about' element={<About />} />
              <Route path='/package' element={<Package />} />
              <Route path='/package/preview' element={<PreviewPackage />} />
              <Route path='/package/cart' element={<CartPackage />} />
              <Route path='/package/checkout' element={<CheckoutPackage />} />
              <Route path='/package/payment' element={<PaymentPackage />} />
              <Route path='/course/:id' element={<VideoDetails />} />
              <Route path='/successfully' element={<Successfully />} />
            </Route>
            <Route path='/p' element={<LayoutProfile />} >
              <Route path='/p/dashboard' element={<Dashboard />} />
              <Route path='/p/transfer' element={<Transfer />} />
              <Route path='/p/holding-tank' element={<HoldingTank />} />
              <Route path='/p/wallet' element={<Wallet />} />
              <Route path='/p/business' element={<Bussiness />} />
              <Route path='/p/reports' element={<Reports />} />
              <Route path='/p/orders' element={<Orders />} />
            </Route>
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </AppProvider>
    </Suspense>
  )
}

export default App
