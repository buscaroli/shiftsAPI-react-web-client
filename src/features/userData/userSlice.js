import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { serverSignUp, serverLogin } from '../../utils/api'

const initialState = {
  userData: [],
  currentRequestId: '',
  loading: true,
  error: null,
}

export const signUp = createAsyncThunk(
  'users/signUp',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const userData = await serverSignUp({ name, email, password })
      return userData
    } catch (err) {
      return rejectWithValue('Something went wrong', err)
    }
  }
)

export const login = createAsyncThunk(
  'users/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userData = await serverLogin({ email, password })
      return userData
    } catch (err) {
      return rejectWithValue('Wrong Credentials.', err)
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
        state.userData = {}
        state.error = error
      }
    },
    [login.fulfilled]: (state, { meta, payload }) => {
      if (meta.requestId === state.currentRequestId.requestId) {
        state.userData = payload
        state.loading = false
      }
    },
    [login.pending]: (state, { meta }) => {
      state.currentRequestId = meta
      state.loading = true
    },
    [login.rejected]: (state, { meta, payload, error }) => {
      if (meta.requestId === state.currentRequestId.requestId) {
        state.currentRequestId = meta
        state.loading = false
        state.userData = {}
        state.error = error
      }
    },
  },
})

export default reducer
