import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const pages = [
  ['Home', '#home'],
  ['Data', '#data'],
  ['What', '#whatPage'],
  ['Where', '#where'],
  ['About', '#footer'],
]

const renderLinks = (arr) => {
  return arr.map((page) => {
    return (
      <li className="font-bold text-xl pl-6">
        <a href={`${page[1]}`}>{`${page[0]}`}</a>
      </li>
    )
  })
}

const renderIcon = (showing) => {
  return showing ? (
    <MenuIcon className="h-10 pr-4 sm:hidden" />
  ) : (
    <XIcon className="h-10 pr-4 sm:hidden" />
  )
}

const renderHiddenMenu = (showing, arr) => {
  if (!showing)
    return (
      <section className="flex justify-start h-12 items-center list-none bg-amber-400 text-white drop-shadow-lg sm:hidden">
        {renderLinks(arr)}
      </section>
    )
}

function Header({ title }) {
  const [showMenu, setShowMenu] = useState(true)

  const menuClick = () => setShowMenu(!showMenu)

  return (
    <>
      <section className="fixed w-screen flex justify-between h-24 items-center  bg-amber-400 text-slate-700 drop-shadow-lg">
        <h1 className="text-6xl text-bold pl-4">{title}</h1>
        <ul className="hidden sm:flex sm:justify-evenly sm:pr-4">
          {renderLinks(pages)}
        </ul>
        <div onClick={menuClick}>{renderIcon(showMenu)}</div>
      </section>
      {renderHiddenMenu(showMenu, pages)}
    </>
  )
}

export default Header
