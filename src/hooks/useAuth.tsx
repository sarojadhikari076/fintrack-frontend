import { ME } from '@/constants/routes'
import { ACCESS_TOKEN } from '@/constants/text'
import { AuthState, IUser } from '@/interfaces/user'
import { get } from '@/services/http'
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
  const [authState, setAuthState] = useState(AuthState.AUTHENTICATING)
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

  const getMe = async () => {
    try {
      const { user } = await get({ endpoint: ME })
      setUser(user)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      setAuthState(AuthState.AUTHENTICATED)
      getMe()
    } else setAuthState(AuthState.UNAUTHENTICATED)
  }, [])

  const authContextValue: AuthContextProps = {
    authState,
    user,
    updateUser,
    logout
  }

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
