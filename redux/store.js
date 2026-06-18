import { configureStore } from '@reduxjs/toolkit';
import LoginModalReducer from './slices/loginModal'
import authReducer from './slices/auth'

export const store = configureStore({
  reducer: {
    modal: LoginModalReducer,
    auth: authReducer,
  },
})