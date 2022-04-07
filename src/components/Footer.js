import React from 'react'

function Footer() {
  return (
    <div
      id="footer"
      className="w-screen fixed bottom-0 py-2 flex flex-col bg-amber-400 text-black text-center text-sm tracking-wide md:justify-center items-center content-center transition-all ease-in-out"
    >
      <div className="flex content-start md:w-[800px]">
        <div>
          <h4 className="text-lg font-bold">TailWindCSS</h4>
          <p className="p-3 first-letter:text-4xl">
            Used for styling the page as wanted to try it out.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold">Custom API</h4>
          <p className="p-3 first-letter:text-4xl">
            Interfaced to a custom API deployed on Heroku (free-tier).
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold">Redux/Toolkit</h4>
          <p className="p-3 first-letter:text-4xl">
            Used Redux/Toolkit for state-management.
          </p>
        </div>
      </div>
      <div
        className="border-t border-gray-500 pt-4
       tracking-wider font-bold"
      >
        <a
          className="hover:scale-110 ease-in-out transition-all"
          href="mailto: m.buscaroli@outlook.com"
        >
          Copyright Matteo April 2022
        </a>
      </div>
    </div>
  )
}

export default Footer
