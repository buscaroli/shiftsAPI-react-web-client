import { createSlice } from '@reduxjs/toolkit'

export const signUpSlice = createSlice({
  name: 'signUp',
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

export const { toggle, reset, switchOn } = signUpSlice.actions

export default signUpSlice.reducer
