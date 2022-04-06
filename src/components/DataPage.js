import React from 'react'
import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { PlusIcon } from '@heroicons/react/solid'
import { todayWithDay } from '../utils/timeFormat'
import { getAll, add } from '../features/userData/shiftSlice'

const UserCard = ({ userData }) => {
  return (
    <div className="grid grid-cols-1 grid-rows-3 p-21 drop-shadow-lg w-full">
      <div className="bg-amber-400 pt-6 text-2xl text-slate-700  rounded-t-lg p-3 items-center">
        {userData.name}
      </div>
      <div className="bg-slate-300 pt-6 text-xl text-slate-700 p-3 items-center border-b-2">
        {userData.email}
      </div>
      <div className="bg-slate-300 pt-6 text-xl text-slate-700 rounded-b-lg p-3 items-center">
        {todayWithDay()}
      </div>
    </div>
  )
}

const NewShiftForm = ({ when, where, desc, billed, paid, callAddShift }) => {
  const callParentComponent = (e) => {
    console.log('inside callParentComponent()')
    e.preventDefault()
    callAddShift()
  }

  return (
    <div className="border-2 rounded-lg drop-shadow-lg text-xl p-1 bg-slate-300">
      <form className="grid grid-cols-8 grid-rows-5 ">
        <div className="col-span-8 bg-slate-700 text-white text-center p-2 border-2">
          Add a new Shift
        </div>
        {/* <label htmlFor="where"></label> */}
        <input
          ref={where}
          type="text"
          className="col-span-4 border-2 bg-slate-300"
          placeholder="Where?"
        />
        {/* <label htmlFor="when"></label> */}
        <input
          ref={when}
          type="date"
          className="col-span-4 border-2 bg-slate-300"
        />
        {/* <label htmlFor="billed"></label> */}
        <input
          ref={billed}
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
          ref={paid}
          type="checkbox"
          className="col-span-1 border-2 scale-150 mx-auto mt-4 rounded-full bg-slate-300"
        />
        {/* <label htmlFor="description"></label> */}
        <textarea
          ref={desc}
          className="col-span-6 row-span-2 border-2 bg-slate-300"
          placeholder="Enter a description in this area..."
        />
        <button
          type="submit"
          className="col-span-2 row-span-2 border-2  bg-slate-700 "
          onClick={callParentComponent}
        >
          <PlusIcon className="w-16 h-16 text-amber-400 mx-auto" />
        </button>
      </form>
    </div>
  )
}

/////////////////////////////
// DataPage Component ///////
function DataPage() {
  const userStoredData = useSelector((state) => state.user.userData)
  let user = {
    name: userStoredData.name,
    email: userStoredData.email,
  }
  // const list = useSelector((state) => state.shifts.list)

  const dispatch = useDispatch()
  useEffect(() => {
    console.log(`DataPage userStoredData: `, userStoredData)
    dispatch(getAll(userStoredData))
  })

  let whenInputRef = useRef(null)
  let whereInputRef = useRef(null)
  let descInputRef = useRef(null)
  let billedInputRef = useRef(null)
  let paidInputRef = useRef(null)

  const callAddShift = () => {
    let sData = {
      when: whenInputRef.current.value,
      where: whereInputRef.current.value,
      description: descInputRef.current.value,
      billed: billedInputRef.current.value,
      paid: paidInputRef.current.checked,
    }
    let uData = {
      id: userStoredData.id,
      jwt: userStoredData.jwt,
    }

    let data = {
      shift: {
        when: whenInputRef.current.value,
        where: whereInputRef.current.value,
        description: descInputRef.current.value,
        billed: billedInputRef.current.value,
        paid: paidInputRef.current.checked,
      },
      user: {
        id: userStoredData.id,
        jwt: userStoredData.jwt,
      },
    }

    console.log('data\n', data)

    dispatch(add(data))
  }

  return (
    <main className="h-screen mt-40 sm:mt-28 pl-4 mb-4 mx-auto">
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 p-4 gap-4">
          <UserCard userData={user} />
          <NewShiftForm
            when={whenInputRef}
            where={whereInputRef}
            desc={descInputRef}
            billed={billedInputRef}
            paid={paidInputRef}
            callAddShift={callAddShift}
          />
        </div>
      </section>
      <article>
        Data
        <div></div>
      </article>
    </main>
  )
}

export default DataPage
