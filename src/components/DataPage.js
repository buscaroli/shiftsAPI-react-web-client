import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { PlusIcon } from '@heroicons/react/solid'
import { today } from '../utils/timeFormat'

const UserCard = ({ userData }) => {
  console.log(`the data is ${userData.name} and ${userData.email}`)
  return (
    <div className="grid grid-cols-1 grid-rows-3 p-21 drop-shadow-lg w-full">
      <div className="bg-amber-400 text-2xl text-slate-700  rounded-t-lg p-3 items-center">
        {userData.name}
      </div>
      <div className="bg-slate-300 text-xl text-slate-700 p-3 items-center border-b-2">
        {userData.email}
      </div>
      <div className="bg-slate-300 text-xl text-slate-700 rounded-b-lg p-3 items-center">
        {today()}
      </div>
    </div>
  )
}

const NewShiftForm = () => {
  return (
    <div className="border-2 rounded-lg drop-shadow-lg text-xl p-1 bg-slate-300">
      <form className="grid grid-cols-8 grid-rows-5 ">
        <div className="col-span-8 bg-slate-700 text-white text-center p-2 border-2">
          Add a new Shift
        </div>
        {/* <label htmlFor="where"></label> */}
        <input
          type="text"
          className="col-span-4 border-2 bg-slate-300"
          placeholder="Where?"
        />
        {/* <label htmlFor="when"></label> */}
        <input type="date" className="col-span-4 border-2 bg-slate-300" />
        {/* <label htmlFor="billed"></label> */}
        <input
          type="number"
          step="0.01"
          className="col-span-4 border-2 bg-slate-300"
          placeholder="Charged (£)"
        />
        <label
          htmlFor="paid"
          className="col-span-3 text-center p-2 border-2 bg-slate-300"
        >
          Paid?
        </label>
        <input
          type="checkbox"
          className="col-span-1 border-2 scale-150 mx-auto mt-4 rounded-full bg-slate-300"
        />
        {/* <label htmlFor="description"></label> */}
        <textarea
          className="col-span-6 row-span-2 border-2 bg-slate-300"
          placeholder="Enter a description in this area..."
        />
        <button
          type="submit"
          className="col-span-2 row-span-2 border-2  bg-slate-700 "
        >
          <PlusIcon className="w-16 h-16 text-amber-400 mx-auto" />
        </button>
      </form>
    </div>
  )
}

function DataPage() {
  const userStoredData = useSelector((state) => state.user.userData)
  let user = {
    name: userStoredData.name,
    email: userStoredData.email,
  }
  useEffect(() => {
    user = { name: userStoredData.name, email: userStoredData.email }
    console.log(user)
  }, [userStoredData])

  return (
    <main className="h-screen mt-40 sm:mt-28 pl-4 mb-4 mx-auto">
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 p-4 gap-4">
          <UserCard userData={user} />
          <NewShiftForm />
        </div>
      </section>
      <article>
        <h3 className="text-2xl text-slate-700">Data</h3>
        <div></div>
      </article>
    </main>
  )
}

export default DataPage
