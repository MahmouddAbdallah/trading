import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Loading from './components/Loading'
import AppProvider from './context/appContext'
const Home = lazy(() => import('./pages/Home'))
const SignUp = lazy(() => import('./pages/SignUp'))
const SignIn = lazy(() => import('./pages/SignIn'))
const NotFound = lazy(() => import('./pages/NotFound'));
const LayoutProfile = lazy(() => import('./pages/Profile/LayoutProfile'))
const Dashboard = lazy(() => import('./pages/Profile/Dashboard'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <AppProvider>
        <Router>
          <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/p' element={<LayoutProfile />} >
              <Route path='/p/dashboard' element={<Dashboard />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </AppProvider>
    </Suspense>
  )
}

export default App
