import { type PropsWithChildren } from 'react'
import { Outlet } from 'react-router-dom'

export function Business ({ children }: PropsWithChildren) {
  return (
    <div>
      <p>Sidebar</p>
      <Outlet />
      { children }
    </div>

  )
}