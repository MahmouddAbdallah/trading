import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Loading from './components/Loading'
import AppProvider from './context/appContext'
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const ContactUs = lazy(() => import('./pages/ContactUs/ContactUs'))
const Services = lazy(() => import('./pages/Services/Services'))
const LayoutPages = lazy(() => import('./LayoutPages'))
const SignUp = lazy(() => import('./pages/SignUp'))
const SignIn = lazy(() => import('./pages/SignIn'))
const NotFound = lazy(() => import('./pages/NotFound'));
const LayoutProfile = lazy(() => import('./pages/Profile/LayoutProfile'))
const Dashboard = lazy(() => import('./pages/Profile/Dashboard/Dashboard'));
const Transfer = lazy(() => import('./pages/Profile/Dashboard/Transfer'));
const HoldingTank = lazy(() => import('./pages/Profile/Dashboard/HoldingTank'));
const EwalletAccountHistory = lazy(() => import('./pages/Profile/Business/EwalletAccountHistory'));
const CommissionsHistory = lazy(() => import('./pages/Profile/Business/CommissionsHistory'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <AppProvider>
        <Router>
          <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
          <Routes>
            <Route path='/' element={<LayoutPages />} >
              <Route path='/' index element={<Home />} />
              <Route path='/services' element={<Services />} />
              <Route path='/contact' element={<ContactUs />} />
              <Route path='/about' element={<About />} />
            </Route>
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/p' element={<LayoutProfile />} >
              <Route path='/p/dashboard' element={<Dashboard />} />
              <Route path='/p/dashboard/transfer' element={<Transfer />} />
              <Route path='/p/dashboard/holding-tank' element={<HoldingTank />} />
              <Route path='/p/business/ewallet-account-history' element={<EwalletAccountHistory />} />
              <Route path='/p/business/commissions-history' element={<CommissionsHistory />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </AppProvider>
    </Suspense>
  )
}

export default App
