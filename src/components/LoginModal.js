import React from 'react'
import ReactDOM from 'react-dom'
import { useSelector, useDispatch } from 'react-redux'
import { reset, toggle } from '../features/loginModal/loginSlice'

function LoginModal() {
  const login = useSelector((state) => state.login.value)
  const dispatch = useDispatch()

  return ReactDOM.createPortal(
    <div className="grid justify-center content-center w-screen h-screen fixed top-0 left-0 bg-gray-500">
      <div className=" h-[600px] w-[400px] bg-gray-200 text-slate-700 text-3xl">
        Login Modal
        <button
          onClick={() => dispatch(reset())}
          className="p-4 rounded-full radius-md bg-sky-800 text-white"
        >
          Click Me
        </button>
      </div>
    </div>,
    document.querySelector('#login-modal')
  )
}

export default LoginModal
