import { createBrowserRouter } from "react-router-dom";
import { HomePage } from '@landingPage/views/Home'
import { Login } from '@auth/Login'
import { Business } from '@business/Business'
import { Dashboard } from '@business/Dashboard/Dashboard'
import { Cars } from '@business/Cars/Cars'
import { Motorcycles } from '@business/Motorcycles/Motorcycles'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: '/admin',
    element: <Business />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      }, 
      {
        path: 'cars',
        element: <Cars />
      },
      {
        path: 'motorcycles',
        element: <Motorcycles />
      }
    ]
  }
])