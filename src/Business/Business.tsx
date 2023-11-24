import { type PropsWithChildren } from 'react'
import { Sidebar } from './components/Sidebar'
import { Outlet } from 'react-router-dom'
import Styles from '@businessStyles/main.module.css'

export function Business ({ children }: PropsWithChildren) {
  return (
    <div className={Styles.container}>
      <Sidebar />
      <Outlet />
      { children }
    </div>

  )
}