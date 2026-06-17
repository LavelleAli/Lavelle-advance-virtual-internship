import { configureStore } from '@reduxjs/toolkit';
import LoginModalReducer from './slices/loginModal'

export const store = configureStore({
  reducer: {
    modal: LoginModalReducer,
  },
})