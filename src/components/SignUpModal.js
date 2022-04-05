import React from 'react'
import ReactDOM from 'react-dom'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { reset } from '../features/signUpModal/signUpModalSlice'
import { signUp } from '../features/userData/userSlice'

function SignUpModal() {
  const dispatch = useDispatch()
  const nameInputRef = useRef(null)
  const emailInputRef = useRef(null)
  const passwordInputRef = useRef(null)

  const callSignUp = async () => {
    const userData = dispatch(
      signUp({
        name: nameInputRef.current.value,
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      })
    )
    // if status === 201 navigate to the Data page
    console.log('callSignUp:\n', userData)
  }

  return ReactDOM.createPortal(
    <div className="grid justify-center content-center w-screen h-screen fixed top-0 left-0 bg-gray-400">
      <div className="flex flex-col justify-between h-[600px] w-[400px] bg-gray-200 text-slate-700 text-3xl rounded-xl drop-shadow-2xl">
        <h1 className="mx-auto pt-4 text-6xl">SignUp</h1>

        <form className="p-4">
          <div className="p-4">
            <label htmlFor="email">Name</label>
            <input
              ref={nameInputRef}
              type="text"
              className="rounded-lg p-2"
              name="username"
              id="username"
              placeholder="Name"
              required
            ></input>
          </div>
          <div className="p-4">
            <label htmlFor="email">Email</label>
            <input
              ref={emailInputRef}
              type="text"
              className="rounded-lg p-2"
              name="email"
              id="email"
              placeholder="Email"
              required
            ></input>
          </div>
          <div className="p-4">
            <label htmlFor="password">Password</label>
            <input
              ref={passwordInputRef}
              type="password"
              className="rounded-lg p-2"
              name="password"
              id="password"
              placeholder="password"
              required
            ></input>
          </div>
        </form>

        <div className="flex justify-evenly">
          <button
            onClick={callSignUp}
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
    document.querySelector('#signup-modal')
  )
}

export default SignUpModal
