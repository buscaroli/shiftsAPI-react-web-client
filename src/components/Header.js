import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const pages = [
  ['Home', '/home'],
  ['Data', '/data'],
  ['What', '/what'],
  ['Where', '/where'],
  ['About', '/about'],
]

const renderLinks = (arr) => {
  return arr.map((page) => {
    return (
      <li className="font-bold pl-6">
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
      <section className="flex justify-start h-12 items-center list-none bg-sky-700 text-white drop-shadow-lg">
        {renderLinks(arr)}
      </section>
    )
}

function Header({ title }) {
  const [showMenu, setShowMenu] = useState(true)

  const menuClick = () => setShowMenu(!showMenu)

  return (
    <>
      <section className="sticky w-screen flex justify-between h-16 items-center  bg-sky-700 text-white drop-shadow-lg">
        <h1 className="text-4xl text-bold pl-4">{title}</h1>
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
