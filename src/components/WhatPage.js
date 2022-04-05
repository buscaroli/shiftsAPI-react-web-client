import React from 'react'

const paragraphs = [
  {
    title: 'Add, Delete, Update, Search',
    text: 'All you need to keep track of your shifts in a single online application. Add, Delete, Update and Search through your archive and get statistical data about your time and finances',
  },
  {
    title: 'Private',
    text: 'Your data is kept private and you can access your data from anywhere thanks to online storage.',
  },
  {
    title: 'Charts',
    text: 'Get a better understanding of your finances by scanning your eyes on charts that show your weekly, monthly or even yearly performance.',
  },
  {
    title: 'Easy Report',
    text: 'Received that email from your accountant? No more late nights looking for receipts and matching them to a clunky spreadsheet. Just export your yearly report and send it!',
  },
]

const renderCards = (articles) => {
  return articles.map(({ title, text }, index) => {
    return (
      <div key={index} className="grid grid-cols-1 grid-rows-2 my-2 sm:m-4">
        <h4 className="bg-amber-400 p-2 rounded-t-lg text-3xl">{title}</h4>
        <p className=" bg-slate-300 p-2 rounded-b-lg text-xl">{text}</p>
      </div>
    )
  })
}

function WhatPage() {
  return (
    <main id="whatPage" className="mt-32 mb-4 h-screen mx-auto md:w-[800px]">
      <h1 className="text-4xl my-6 text-center text-slate-700">
        What can this App do?
      </h1>
      <article className="grid grid-cols-1 md:grid-cols-2">
        {renderCards(paragraphs)}
      </article>
    </main>
  )
}

export default WhatPage
