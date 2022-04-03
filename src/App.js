import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import WhatPage from './components/WhatPage'
import LoginModal from './components/LoginModal'
import { useSelector } from 'react-redux'

function App() {
  const login = useSelector((state) => state.login.value)

  return (
    <div className="grid grid-cols-1 bg-slate-200">
      <Header title="Shifts" />

      {/* <Main /> */}
      <WhatPage />

      {login && <LoginModal />}

      <Footer />
    </div>
  )
}

export default App
