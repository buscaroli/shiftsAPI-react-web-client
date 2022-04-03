import { configureStore } from '@reduxjs/toolkit'
import loginModalReducer from '../features/loginModal/loginModal'

export default configureStore({
  reducer: {
    loginModal: loginModalReducer,
  },
})
