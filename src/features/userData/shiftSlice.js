import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { shiftsGetAll } from '../../utils/api'

const initialState = {
  list: [],
  currentRequestId: '',
  loading: true,
  error: null,
}

export const getAll = createAsyncThunk(
  'shifts/getAll',
  async ({ _id, jwt }, { rejectWithValue }) => {
    try {
      const shifts = await shiftsGetAll({ _id, jwt })
      return shifts
    } catch (err) {
      return rejectWithValue('Something went wrong retrieving your shifts.')
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
        state.error = error
      }
    },
  },
})

export default reducer
