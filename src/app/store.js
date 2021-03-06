import { configureStore } from '@reduxjs/toolkit'
import loginModalReducer from '../features/loginModal/loginModalSlice'
import signUpModalReducer from '../features/signUpModal/signUpModalSlice'
import userReducer from '../features/userData/userSlice'
import shiftsReducer from '../features/userData/shiftSlice'

export default configureStore({
  reducer: {
    login: loginModalReducer,
    signup: signUpModalReducer,
    user: userReducer,
    shifts: shiftsReducer,
  },
})
