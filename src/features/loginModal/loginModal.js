import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'loginModal',
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value
    },
    reset: (state) => {
      state.value = false
    },
    switchOn: (state) => {
      state.value = true
    },
  },
})

export const { toggle, reset, switchOn } = loginSlice.actions

export default loginSlice
