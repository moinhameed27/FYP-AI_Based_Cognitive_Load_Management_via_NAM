'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Check localStorage on mount for persisted auth
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        setUser(JSON.parse(storedUser))
        setIsAuthenticated(true)
      }
    }
  }, [])

  const signup = (userData) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(userData))
      setUser(userData)
      setIsAuthenticated(true)
      return { success: true }
    }
    return { success: false }
  }

  const signin = (email, password) => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        const userData = JSON.parse(storedUser)
        if (userData.email === email) {
          setUser(userData)
          setIsAuthenticated(true)
          return { success: true }
        }
      }
    }
    return { success: false, error: 'Invalid credentials' }
  }

  const signout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user')
    }
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signup, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}



