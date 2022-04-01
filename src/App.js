import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import WhatPage from './components/WhatPage'

function App() {
  return (
    <div className="bg-slate-200">
      <Header title="Shifts" />

      {/* <Main /> */}
      <WhatPage />
      <Footer />
    </div>
  )
}

export default App
