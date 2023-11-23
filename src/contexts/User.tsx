import { createContext, type PropsWithChildren, useState } from 'react'

type User = {
  name: string
  lastname: string
  position: string
  department: string
}

interface ContextType {
  token: string
  setToken: (token: string) => void
  user: User | undefined
  setUser: (user: User) => void
}

export const UserContext = createContext<ContextType | undefined>(undefined)

export function UserProvider ({ children }: PropsWithChildren) {
  const [token, setToken] = useState<ContextType['token']>('')
  const [user, setUser] = useState<ContextType['user']>()
  return (
    <UserContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </UserContext.Provider>

  )
}