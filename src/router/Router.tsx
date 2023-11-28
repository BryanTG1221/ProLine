import { createBrowserRouter } from "react-router-dom";
import { HomePage } from '@landingPage/views/Home'
import { Login } from '@auth/Login'
import { Business } from '@business/Business'
import { Dashboard } from '@business/Dashboard/Dashboard'
import { Cars } from '@business/Cars/Cars'
import { Motorcycles } from '@business/Motorcycles/Motorcycles'
import { Sells } from '@business/Sells/Sells'
import { Users } from '@business/Users/Users'
import { CarsLanding } from '@landingPage/Cars/Cars'
import { MotorcyclesLanding } from "@landingPage/Motorcycles/Motorcycles";
import { CarDetail } from "@landingPage/Cars/CarDetail";
import { MotorcyclesDetail } from "@landingPage/Motorcycles/Detail";

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