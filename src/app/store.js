import { configureStore } from '@reduxjs/toolkit'
import loginModalReducer from '../features/loginModal/loginSlice'

export default configureStore({
  reducer: {
    login: loginModalReducer,
  },
})
