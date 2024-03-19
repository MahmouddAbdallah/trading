import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home'
const SignUp = lazy(() => import('./pages/SignUp'))
const SignIn = lazy(() => import('./pages/SignIn'))
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App
