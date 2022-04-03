import React from 'react'
import ReactDOM from 'react-dom'

function LoginModal() {
  return ReactDOM.createPortal(
    <div className="grid justify-center content-center w-screen h-screen fixed top-0 left-0 bg-gray-500">
      <div className=" h-[600px] w-[400px] bg-gray-200 text-slate-700 text-3xl">
        Login Modal
      </div>
    </div>,
    document.querySelector('#login-modal')
  )
}

export default LoginModal
