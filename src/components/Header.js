import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux'
import { switchOn as loginSwitchOn } from '../features/loginModal/loginModalSlice'
import { switchOn as signUpSwitchOn } from '../features/signUpModal/signUpModalSlice'
import { logout } from '../features/userData/userSlice'

const pages = [
  ['Home', '/'],
  ['What', '/whatPage'],
  ['Why', '/whyPage'],
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
  const userData = useSelector((state) => state.user.userData)

  const logOff = async () => {
    console.log(`logging out: `, userData)
    const res = dispatch(
      logout({
        name: userData.name,
        email: userData.email,
        jwt: userData.jwt,
      })
    )
  }

  const renderLinks = (arr) => {
    return arr.map((page, index) => {
      return (
        <li key={index} className="font-bold text-xl pl-4 py-2">
          <Link to={`${page[1]}`}>{`${page[0]}`}</Link>
        </li>
      )
    })
  }

  // login button that should be shown only if user NOT logged in
  const LoginButton = () => {
    return (
      <li className="font-bold text-xl px-3 py-2 ml-5 bg-green-600 text-white rounded-full items-center">
        <button
          onClick={(e) => {
            e.preventDefault()
            dispatch(loginSwitchOn())
          }}
        >
          LogIn
        </button>
      </li>
    )
  }

  // signup button that should be shown only if user NOT logged in
  const SignUpButton = () => {
    return (
      <li className="font-bold text-xl px-3 py-2 ml-5 bg-orange-700 text-white rounded-full items-center">
        <button
          onClick={(e) => {
            e.preventDefault()
            dispatch(signUpSwitchOn())
          }}
        >
          SignUp
        </button>
      </li>
    )
  }

  // logout button that should be shown only if user logged in
  const LogOutButton = () => {
    return (
      <li className="font-bold text-xl px-3 py-2 ml-5 bg-orange-700 text-white rounded-full items-center">
        <button
          onClick={(e) => {
            e.preventDefault()
            dispatch(logOff())
          }}
        >
          LogOut
        </button>
      </li>
    )
  }

  // Data link that should be shown only if user is logged in
  const DataLink = () => {
    return (
      <li className="font-bold text-xl pl-4 py-2">
        <Link to="/dataPage">Data</Link>
      </li>
    )
  }

  const renderHiddenMenu = (showing, arr) => {
    if (!showing)
      return (
        <section className="flex z-50 justify-start h-12 items-center list-none bg-amber-400 text-slate-700 drop-shadow-lg sm:hidden">
          {renderLinks(arr)}
          {userLoggedIn && <DataLink />}
          {!userLoggedIn && <LoginButton />}
          {!userLoggedIn && <SignUpButton />}
          {userLoggedIn && <LogOutButton />}
        </section>
      )
  }

  return (
    <>
      <section className="fixed top-0 w-screen flex justify-between h-24 items-center  bg-amber-400 text-slate-700 drop-shadow-lg z-50">
        <h1 className="text-6xl text-bold pl-4">{title}</h1>
        <ul className="hidden sm:flex sm:justify-evenly sm:pr-4 ">
          {renderLinks(pages)}
          {userLoggedIn && <DataLink />}
          {!userLoggedIn && <LoginButton />}
          {!userLoggedIn && <SignUpButton />}
          {userLoggedIn && <LogOutButton />}
        </ul>
        <div onClick={menuClick}>{renderIcon(showMenu)}</div>
      </section>
      <section className="fixed z-50 top-24 w-screen transition-all ease-in-out">
        {renderHiddenMenu(showMenu, pages)}
      </section>
    </>
  )
}

export default Header
