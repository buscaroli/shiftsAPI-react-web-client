import { configureStore } from '@reduxjs/toolkit'
import loginModalReducer from '../features/loginModal/loginModalSlice'
import userReducer from '../features/userData/userSlice'

export default configureStore({
  reducer: {
    login: loginModalReducer,
    user: userReducer,
  },
})
