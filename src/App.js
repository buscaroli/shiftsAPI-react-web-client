import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import WhatPage from './components/WhatPage'
import LoginModal from './components/LoginModal'

const renderLogin = (showing) => {
  if (showing) return <LoginModal />
}

function App() {
  const [isShowingLogin, setIsShowingLogin] = useState(false)

  return (
    <div className="grid grid-cols-1 bg-slate-200">
      <Header title="Shifts" />

      {/* <Main /> */}
      <WhatPage />

      {renderLogin(isShowingLogin)}

      <Footer />
    </div>
  )
}

export default App
