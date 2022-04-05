import React from 'react'
import Header from './Header'
import Footer from './Footer'

function HomePage() {
  return (
    <>
      <main className="h-screen mt-24 pl-4 mb-4 mx-auto md:w-[800px]">
        <h1 className="justify-center content-center text-slate-700 text-4xl py-4">
          The Shifts Web App
        </h1>
        <article className="bg-amber-400 rounded-lg p-12 my-16 text-2xl drop-shadow-lg">
          Hello and Welcome to the Shifts Web App. Sign Up in the top-right
          corner and you'll be able to start tracking your shifts. Once you are
          logged in a new page will be made available to you through which you
          can save and retrieve your data.
        </article>
        <article className="bg-amber-400 rounded-lg p-12 my-16 text-2xl drop-shadow-lg">
          This is still a work in progress and I plan to expand the app further
          to provide graphics, charts and statistical data that can help you to
          save time with paperwork. Check-out the Why Link in the header to know
          more.
        </article>
      </main>
    </>
  )
}

export default HomePage
