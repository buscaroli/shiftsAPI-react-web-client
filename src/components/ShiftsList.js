import React from 'react'
import { useSelector } from 'react-redux'
import { TrashIcon } from '@heroicons/react/outline'

function ShiftsList() {
  const userLoggedIn = useSelector((state) => state.user.userData.name)
  const list = useSelector((state) => state.shifts.list)

  if (userLoggedIn && list.data !== undefined) {
    console.log('ShiftsList: list', list)
    let reversedList = Array.from(list.data).reverse()
    return reversedList.map((shift, index) => {
      return (
        <div
          key={index}
          className="grid grid-cols-4 mt-4 md:m-2 grid-rows-4 text-lg  bg-slate-200 rounded-lg drop-shadow-lg"
        >
          <div className="flex justify-between font-bold col-span-4 p-2 bg-amber-400 rounded-t-lg">
            <div>Date: {shift.when}</div>

            <TrashIcon className="h-8 w-8 p-1 bg-orange-500 rounded-lg" />
          </div>

          <div className="col-span-3 p-2 bg-slate-200">{shift.where}</div>
          <div className="text-2xl col-span-1 p-2 bg-slate-200">
            £ {shift.billed}
          </div>
          <div className="col-span-4 row-span-2 border-t-white border-t-2 p-2">
            {shift.description}
          </div>
        </div>
      )
    })
  } else {
    return (
      <div className="text-2xl p-4 text-center border-2 rounder-lg">
        Loading...
      </div>
    )
  }
}

export default ShiftsList