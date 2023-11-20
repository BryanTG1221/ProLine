import { RouterProvider } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import { router } from '@routerApp/Router'
import './App.css'

function App() {
  return (
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  )
}

export default App
