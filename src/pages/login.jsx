import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import useStore from '../store'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const setIsAuthenticated = useStore(state => state.setIsAuthenticated)
  const { loginWithRedirect } = useAuth0()

  const handleLogin = async (event) => {
    event.preventDefault()
    loginWithRedirect({
      email,
      password,
    })
  }

  return (
    <div className="login-container">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type='Submit' onClick={handleLogin}>Log In</button>
    </div>
  )
}
