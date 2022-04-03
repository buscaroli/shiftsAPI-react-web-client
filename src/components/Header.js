import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useDispatch } from 'react-redux'
import { switchOn } from '../features/loginModal/loginSlice'

const pages = [
  ['Home', '#home'],
  ['Data', '#data'],
  ['What', '#whatPage'],
  ['About', '#footer'],
  ['Login', '/login'],
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

  const dispatch = useDispatch()

  const renderLinks = (arr) => {
    let last = arr.length - 1
    return arr.map((page, index) => {
      if (index === last) {
        return (
          <li
            key={index}
            className="font-bold text-xl px-3 py-2 ml-5 bg-sky-700 text-white rounded-full items-center"
          >
            <button
              onClick={(e) => {
                e.preventDefault()
                dispatch(switchOn())
              }}
            >
              <a href={`${page[1]}`}>{`${page[0]}`}</a>
            </button>
          </li>
        )
      } else {
        return (
          <li key={index} className="font-bold text-xl pl-6 py-2">
            <a href={`${page[1]}`}>{`${page[0]}`}</a>
          </li>
        )
      }
    })
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
