import Header from './components/Header'
import Footer from './components/Footer'
import LoginModal from './components/LoginModal'
import SignUpModal from './components/SignUpModal'
import { useSelector } from 'react-redux'
import HomePage from './components/HomePage'
import WhatPage from './components/WhatPage'
import WhyPage from './components/WhyPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const login = useSelector((state) => state.login.value)
  const signup = useSelector((state) => state.signup.value)
  return (
    <div className="grid grid-cols-1">
      <BrowserRouter>
        <Header title="Shifts" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/whatPage" element={<WhatPage />} />
          <Route path="/whyPage" element={<WhyPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {login && <LoginModal />}
      {signup && <SignUpModal />}
    </div>
  )
}

export default App
