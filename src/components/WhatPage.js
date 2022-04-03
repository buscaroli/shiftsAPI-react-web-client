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
      <div key={index} className="flex flex-col m-8 shadow-xl">
        <h4 className="h-32 bg-amber-400 text-slate-700 text-3xl font-bold p-4 rounded-t-lg">
          {title}
        </h4>
        <p className=" bg-slate-600 text-slate-200 text-2xl tracking-wide leading-10 h-full p-8 rounded-b-lg">
          {text}
        </p>
      </div>
    )
  })
}

function WhatPage() {
  return (
    <main
      id="whatPage"
      className="grid grid-cols md:grid-cols-2 md:h-screen px-12 pt-32"
    >
      {renderCards(paragraphs)}
    </main>
  )
}

export default WhatPage
