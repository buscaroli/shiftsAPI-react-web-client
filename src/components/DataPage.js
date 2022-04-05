import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const UserCard = ({ userData }) => {
  console.log(`the data is ${userData.name} and ${userData.email}`)
  return (
    <div className="grid grid-cols-1 grid-rows-2 p-4 drop-shadow-lg w-96">
      <div className="bg-amber-400 text-2xl text-slate-700  rounded-t-lg p-3 items-center">
        {userData.name}
      </div>
      <div className="bg-slate-300 text-xl text-slate-700 rounded-b-lg p-3 items-center">
        {userData.email}
      </div>
    </div>
  )
}

function Data() {
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
    <main className="h-screen mt-24 pl-4 mb-4 mx-auto md:w-[800px]">
      <section>
        <article>
          <h3 className="text-2xl text-slate-700">User</h3>
          <UserCard userData={user} />
        </article>
      </section>
      <article>
        <h3 className="text-2xl text-slate-700">Data</h3>
      </article>
    </main>
  )
}

export default Data
