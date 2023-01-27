import React, { useState } from 'react'

export default function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(true)
  const login = () => {
    const userData = {
      name,
      email,
      password
    }
    localStorage.setItem('Token-Info', JSON.stringify(userData))
    setLoggedIn(true)
  }
  const logout = () => {
    localStorage.removeItem('Token-Info')
    setLoggedIn(false)
  }
  return (
    <div>
      <h1>This is React Local Storage</h1>
      {loggedIn ? (
        <>
          <form>
            <input type="text" value={name} placeholder="Name" onChange={(e) => (setName(e.target.value))} />
            <input type="text" value={email} placeholder="Email" onChange={(e) => (setEmail(e.target.value))} />
            <input type="password" value={password} placeholder="Password" onChange={(e) => (setPassword(e.target.value))} />
            <button type='submit' onClick={() => (login())}>Go</button>
          </form>
        </>
      ) : (
        <>
          <h1>User is logged in</h1>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </div>
  )
}
