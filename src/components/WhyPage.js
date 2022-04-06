import React from 'react'

const challenges = [
  'Using TailWindCSS for styling',
  'Interfacing to an API designed, implemented and deployed by myself',
  'Using git in a more professional way by branching out and merging back',
  'Using JWT (JsonWebTokens) Client-side for authorization',
  'Using Redux with the new(for me at the time of coding) React-Redux-Toolkit to keep track of users, shifts and modals (those windows that appear when clicking the login and signup buttons',
]

const renderGoals = (arr) => {
  return arr.map((goal, index) => {
    return (
      <li key={index} className="pl-4 py-2">
        <p>👉 {goal}</p>
      </li>
    )
  })
}

const ListOfGoals = ({ goals }) => {
  return <ul>{renderGoals(goals)}</ul>
}

function WhyPage() {
  return (
    <>
      <main className="h-screen mt-40 sm:mt-28 pl-4 mb-4 mx-auto md:w-[800px]">
        <h1 className="text-4xl text-center mb-6 text-slate-700">
          Why this App?
        </h1>
        <article className="grid grid-cols-1 pl-4 text-xl">
          You might be wondering what made me develop this app in the first
          place, after all there are probably already a bazillion app that do
          similar things. Well, if I have to be honest, you are probably correct
          and humanity didn't need a new 'keep track of your life' app...
          however I needed it! You see, I have been learning to code for a while
          now, and I needed a bigger challenge and at the same time I wanted to
          make something that at least I could use and that wouldn't go straight
          to the 'forgot-me-already-git-repo-cemetery' (yes that's a real
          thing).
        </article>
        <article className="grid grid-cols-1 pl-4 text-xl py-8">
          <h4 className="font-bold my-4">
            Some of the goals I wanted to achieve are:
          </h4>
          <ListOfGoals goals={challenges} />
        </article>
      </main>
    </>
  )
}

export default WhyPage
