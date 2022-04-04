import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { serverSignUp } from '../../utils/api'

const initialState = {
  userData: {},
  currentRequestId: '',
  loading: true,
  error: 'error',
}

export const signUp = createAsyncThunk(
  'users/signUp',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const userData = await serverSignUp({ name, email, password })
      return userData
    } catch (err) {
      return rejectWithValue([], err)
    }
  }
)

const { actions, reducer } = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [signUp.fulfilled]: (state, { meta, payload }) => {
      if (meta.requestId === state.currentRequestId.requestId) {
        state.userData = payload
        state.loading = false
      }
    },
    [signUp.pending]: (state, { meta }) => {
      state.currentRequestId = meta
      state.loading = true
    },
    [signUp.rejected]: (state, { meta, payload, error }) => {
      if (meta.requestId === state.currentRequestId.requestId) {
        state.currentRequestId = meta
        state.loading = false
        state.userData = payload
        state.error = error
      }
    },
  },
})

export default reducer
