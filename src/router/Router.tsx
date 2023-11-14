import { createBrowserRouter } from "react-router-dom";
import { HomePage } from '@landingPage/views/Home'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  }
])