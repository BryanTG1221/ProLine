import { createBrowserRouter } from "react-router-dom";
import { HomePage } from '@landingPage/views/Home'
import { Login } from '@auth/Login'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/login",
    element: <Login />
  }
])