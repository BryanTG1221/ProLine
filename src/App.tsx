import { RouterProvider } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import { Toaster } from 'react-hot-toast'
import { router } from '@routerApp/Router'
import './App.css'

function App() {
  return (
    <NextUIProvider>
      <Toaster />
      <RouterProvider router={router} />
    </NextUIProvider>
  )
}

export default App
