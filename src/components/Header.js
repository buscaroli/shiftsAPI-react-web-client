import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useDispatch } from 'react-redux'
import { switchOn as loginSwitchOn } from '../features/loginModal/loginModalSlice'
import { switchOn as signUpSwitchOn } from '../features/signUpModal/signUpModalSlice'
import { useSelector } from 'react-redux'

const pages = [
  ['Home', '#home'],
  ['Data', '/data'],
  ['What', '#whatPage'],
  ['About', '#footer'],
]

const renderIcon = (showing) => {
  return showing ? (
    <MenuIcon className="h-10 pr-4 sm:hidden" />
  ) : (
    <XIcon className="h-10 pr-4 sm:hidden" />
  )
}

function Header({ title }) {
  const [showMenu, setShowMenu] = useState(true)
  const menuClick = () => setShowMenu(!showMenu)

  // true if user is logged in (either through the Login modal or the SignUp modal)
  const userLoggedIn = useSelector((state) => state.user.userData.name)
  const dispatch = useDispatch()

  const renderLinks = (arr) => {
    let last = arr.length - 1
    return arr.map((page, index) => {
      return (
        <li key={index} className="font-bold text-xl pl-6 py-2">
          <a href={`${page[1]}`}>{`${page[0]}`}</a>
        </li>
      )
    })
  }

  const LoginButton = () => {
    return (
      <li className="font-bold text-xl px-3 py-2 ml-5 bg-green-600 text-white rounded-full items-center">
        <button
          onClick={(e) => {
            e.preventDefault()
            dispatch(loginSwitchOn())
          }}
        >
          <a href="#">LogIn</a>
        </button>
      </li>
    )
  }

  const SignUpButton = () => {
    return (
      <li className="font-bold text-xl px-3 py-2 ml-5 bg-orange-700 text-white rounded-full items-center">
        <button
          onClick={(e) => {
            e.preventDefault()
            dispatch(signUpSwitchOn())
          }}
        >
          <a href="#">SignUp</a>
        </button>
      </li>
    )
  }

  const renderHiddenMenu = (showing, arr) => {
    if (!showing)
      return (
        <section className="flex justify-start h-12 items-center list-none bg-amber-400 text-slate-700 drop-shadow-lg sm:hidden">
          {renderLinks(arr)}
        </section>
      )
  }

  return (
    <>
      <section className="fixed w-screen flex justify-between h-24 items-center  bg-amber-400 text-slate-700 drop-shadow-lg">
        <h1 className="text-6xl text-bold pl-4">{title}</h1>
        <ul className="hidden sm:flex sm:justify-evenly sm:pr-4">
          {renderLinks(pages)}
          {!userLoggedIn && <LoginButton />}
          {!userLoggedIn && <SignUpButton />}
        </ul>
        <div onClick={menuClick}>{renderIcon(showMenu)}</div>
      </section>
      <section className="fixed top-24 w-screen">
        {renderHiddenMenu(showMenu, pages)}
      </section>
    </>
  )
}

export default Header
