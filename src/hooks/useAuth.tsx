import { ACCESS_TOKEN } from '@/constants/text'
import { AuthState, IUser } from '@/interfaces/user'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface AuthContextProps {
  authState: AuthState
  user: IUser | null
  updateUser: (userData: IUser) => void
  logout: () => void
}

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState(AuthState.UNAUTHENTICATED)
  const [user, setUser] = useState<IUser | null>(null)

  const updateUser = (userData: IUser) => {
    setUser(userData)
    setAuthState(AuthState.AUTHENTICATED)
  }

  const logout = () => {
    setUser(null)
    setAuthState(AuthState.UNAUTHENTICATED)
    localStorage.removeItem(ACCESS_TOKEN)
  }

  const authContextValue: AuthContextProps = {
    authState,
    user,
    updateUser,
    logout
  }

  useEffect(() => {
    console.log('first')
    if (localStorage.getItem(ACCESS_TOKEN))
      setAuthState(AuthState.AUTHENTICATED)
    else setAuthState(AuthState.UNAUTHENTICATED)
  }, [])

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextProps => {
  const authContext = useContext(AuthContext)

  if (authContext === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return authContext
}
