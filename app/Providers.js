'use client'

import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AuthListener from '@/components/AuthListener'

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <AuthListener />
      {children}
      <ToastContainer position="top-center" />
    </Provider>
  )
}
