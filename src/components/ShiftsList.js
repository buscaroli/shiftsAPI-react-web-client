import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TrashIcon, ClockIcon } from '@heroicons/react/outline'
import { removeShift, getAll } from '../features/userData/shiftSlice'

function ShiftsList() {
  const userLoggedIn = useSelector((state) => state.user.userData.name)
  const list = useSelector((state) => state.shifts.list)

  const userData = useSelector((state) => state.user.userData)
  const dispatch = useDispatch()

  const fetchShifts = useCallback(() => {
    dispatch(getAll(userData))
  }, [dispatch, userData])

  const callDeleteShift = (shift) => {
    const data = {
      shift: {
        _id: shift._id,
      },
      user: {
        name: userData.name,
        email: userData.email,
        _id: userData.id,
        jwt: userData.jwt,
      },
    }
    dispatch(removeShift(data))
    fetchShifts()
  }

  if (userLoggedIn && list.data !== undefined) {
    console.log('ShiftsList: list', list)
    let reversedList = Array.from(list.data).reverse()
    return reversedList.map((shift, index) => {
      return (
        <div
          key={index}
          className="grid grid-cols-4 mt-4 md:m-2 grid-rows-4 text-lg max-h-60 bg-slate-200 rounded-lg drop-shadow-lg"
        >
          <div className="flex justify-between font-bold col-span-4 p-2 bg-amber-400 rounded-t-lg">
            <div>Date: {shift.when}</div>

            <TrashIcon
              onClick={() => callDeleteShift(shift)}
              className="h-8 w-8 p-1 bg-orange-500 rounded-lg"
            />
          </div>

          <div className="col-span-3 p-2 bg-slate-200">{shift.where}</div>
          <div className="text-xl sm:text-2xl col-span-1 p-2 bg-slate-200">
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
      <div className="text-2xl p-4 grid justify-center md:justify-end ">
        <ClockIcon className="h-16 w-16 animate-bounce " />
      </div>
    )
  }
}

export default ShiftsList
