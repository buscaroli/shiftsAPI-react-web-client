import React from 'react'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import { reset } from '../features/loginModal/loginSlice'
import { serverSignUp } from '../../src/utils/api'

function LoginModal() {
  const dispatch = useDispatch()

  const callSignUp = async () => {
    let response = await serverSignUp({
      name: 'mel',
      email: 'mel@email.com',
      password: 'melpassword',
    })
    try {
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  return ReactDOM.createPortal(
    <div className="grid justify-center content-center w-screen h-screen fixed top-0 left-0 bg-gray-400">
      <div className="flex flex-col justify-between h-[600px] w-[400px] bg-gray-200 text-slate-700 text-3xl rounded-xl shadow-2xl">
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

        <button
          onClick={callSignUp}
          className="self-start pl-10 text-sky-700 text-sm font-bold"
        >
          SignUp Instead
        </button>

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
