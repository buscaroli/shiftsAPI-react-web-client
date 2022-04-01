import React from 'react'

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

function Header({ title }) {
  return (
    <section className="sticky w-screen flex justify-between h-16 items-center  bg-sky-700 text-white drop-shadow-lg">
      <h1 className="text-4xl text-bold pl-4">{title}</h1>
      <ul className="flex justify-evenly pr-4">{renderLinks(pages)}</ul>
    </section>
  )
}

export default Header
