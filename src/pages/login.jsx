import useStore from '../store'

export default function Login() {
  const setIsAuthenticated = useStore(state => state.setIsAuthenticated)

  const handleLogin = () => {
    setIsAuthenticated(true)
    console.log("logged in")
  }

  return (
    <div className="login-container">
      <button type='Submit' onClick={handleLogin}>Login</button>
    </div>
  )
}