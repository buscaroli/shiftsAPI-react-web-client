import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { shiftsGetAll, addShift } from '../../utils/api'

const initialState = {
  list: [],
  currentRequestId: '',
  loading: true,
  error: null,
}

export const getAll = createAsyncThunk(
  'shifts/getAll',
  async (user, { rejectWithValue }) => {
    console.log(`shiftSlice.js user: `, user)
    try {
      const shifts = await shiftsGetAll(user)
      console.log('shiftSlice.js AFTER call: shifts: ', shifts)
      return shifts
    } catch (err) {
      return rejectWithValue('Something went wrong retrieving your shifts.')
    }
  }
)

export const add = createAsyncThunk(
  'shifts/add',
  async ({ shift, user }, { rejectWithValue }) => {
    try {
      console.log(
        `-------------\nshift -> ${shift}\nuser -> ${user}\n---------`
      )
      const addedShift = await addShift(shift, user)
      return addedShift
    } catch (err) {
      return rejectWithValue('Something went wrong adding your shift.')
    }
  }
)

const { action, reducer } = createSlice({
  name: 'shifts',
  initialState,
  reducers: {},
  extraReducers: {
    [getAll.fulfilled]: (state, { meta, payload }) => {
      if (meta.requestId === state.currentRequestId.requestId) {
        state.list = payload
        state.loading = false
      }
    },
    [getAll.pending]: (state, { meta }) => {
      state.currentRequestId = meta
      state.loading = true
    },
    [getAll.rejected]: (state, { meta, payload, error }) => {
      if (meta.requestId === state.currentRequestId.requestId) {
        state.currentRequestId = meta
        state.loading = false
        state.list = []
      }
    },
    [add.fulfilled]: (state, { meta, payload, error }) => {
      if (meta.requestId === state.currentRequestId.requestId) {
        state.loading = false
        state.error = null
      }
    },
    [add.pending]: (state, { meta }) => {
      state.currentRequestId = meta
      state.loading = true
    },
    [add.rejected]: (state, { meta, payload, error }) => {
      if (meta.requestId === state.currentRequestId.requestId) {
        state.currentRequestId = meta
        state.loading = false
        state.error = error
      }
    },
  },
})

export default reducer
