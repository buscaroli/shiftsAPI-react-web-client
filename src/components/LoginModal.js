import React from 'react'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import { reset } from '../features/loginModal/loginSlice'

function LoginModal() {
  const dispatch = useDispatch()

  return ReactDOM.createPortal(
    <div className="grid justify-center content-center w-screen h-screen fixed top-0 left-0 bg-gray-400">
      <div className=" flex flex-col justify-between h-[600px] w-[400px] bg-gray-200 text-slate-700 text-3xl rounded-xl shadow-2xl">
        <h1 className="mx-auto pt-4 text-6xl">Login</h1>
        <form className="p-4">
          <div className="p-4">
            <label htmlFor="username">Username</label>
            <input
              className="rounded-lg p-2"
              name="username"
              id="username"
              placeholder="username"
            ></input>
          </div>
          <div className="p-4">
            <label htmlFor="password">Password</label>
            <input
              className="rounded-lg p-2"
              name="password"
              id="password"
              placeholder="password"
            ></input>
          </div>
        </form>
        <div className="flex justify-evenly">
          <button
            onClick={() => dispatch(reset())}
            className="mx-auto mb-4 w-38 p-4 rounded-full radius-md bg-green-600 text-white"
          >
            Submit
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="mx-auto mb-4 w-38 p-4 rounded-full radius-md bg-red-500 text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.querySelector('#login-modal')
  )
}

export default LoginModal
