import React from 'react'

function Footer() {
  return (
    <div
      id="footer"
      className="flex flex-col bg-amber-400 text-black text-center text-sm tracking-wide p-6"
    >
      <div className="flex items-center">
        <div>
          <h4 className="text-lg font-bold">Title One</h4>
          <p className="p-3 first-letter:text-4xl">
            Chuck Norris can slam revolving doors. Chuck Norris once had a heart
            attack. His heart lost.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold">Title Two</h4>
          <p className="p-3 first-letter:text-4xl">
            Chuck Norris’ cowboy boots are made from real cowboys. The flu gets
            a Chuck Norris shot every year.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold">Title Three</h4>
          <p className="p-3 first-letter:text-4xl">
            Chuck Norris once ate at Taco Bell and didn’t get diarrhea. Chuck
            Norris counted to infinity… twice.
          </p>
        </div>
      </div>
      <div
        className="border-t border-gray-500 pt-4
       tracking-wider font-bold"
      >
        Copyright Matteo April 2022
      </div>
    </div>
  )
}

export default Footer
