import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import LoginModalReducer from './slices/loginModal'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: LoginModalReducer,
  },
})