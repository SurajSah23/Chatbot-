import React, { useState } from 'react'
import AuthForm from './components/AuthForm'
import Welcome from './components/Welcome'

function App() {
  const [isLogin, setIsLogin] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState('')

  const handleLogin = (email) => {
    setIsLoggedIn(true)
    setCurrentUser(email)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentUser('')
  }

  return isLoggedIn ? (
    <Welcome user={currentUser} onLogout={handleLogout} />
  ) : (
    <AuthForm
      isLogin={isLogin}
      onToggle={() => setIsLogin(!isLogin)}
      onLogin={handleLogin}
    />
  )
}

export default App
