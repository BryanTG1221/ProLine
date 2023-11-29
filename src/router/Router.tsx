import { PropsWithChildren, useContext } from "react"; 
import { createBrowserRouter, Navigate } from "react-router-dom";
import { UserContext } from '@contexts/User'
import { HomePage } from '@landingPage/views/Home'
import { Login } from '@auth/Login'
import { Business } from '@business/Business'
import { Cars } from '@business/Cars/Cars'
import { Motorcycles } from '@business/Motorcycles/Motorcycles'
import { Sells } from '@business/Sells/Sells'
import { Users } from '@business/Users/Users'
import { CarsLanding } from '@landingPage/Cars/Cars'
import { MotorcyclesLanding } from "@landingPage/Motorcycles/Motorcycles";
import { CarDetail } from "@landingPage/Cars/CarDetail";
import { MotorcyclesDetail } from "@landingPage/Motorcycles/Detail";
import { ErrorPage } from './404'

function ProtectedRoute ({ children }: PropsWithChildren) {
  const userContext = useContext(UserContext)
  console.log(userContext?.token)
  if ((userContext?.token !== '')) {
    return children
  } else {
    return <Navigate to='/' />
  }
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: '/cars',
    element: <CarsLanding />
  },
  {
    path: '/motorcycles',
    element: <MotorcyclesLanding />
  },
  {
    path: '/cars/:id',
    element: <CarDetail />
  },
  {
    path: 'motorcycles/:id',
    element: <MotorcyclesDetail />
  },
  {
    path: '/admin',
    element: <Business><ProtectedRoute></ProtectedRoute></Business>,
    children: [
      {
        path: 'cars',
        element: <Cars />
      },
      {
        path: 'motorcycles',
        element: <Motorcycles />
      },
      {
        path: 'sells',
        element: <Sells />
      },
      {
        path: 'users',
        element: <Users />
      }
    ]
  }
])