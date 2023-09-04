import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AlreadyLoggedIn() {
  const [countdown, setCountdown] = useState(5)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdown => countdown - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (countdown === 0) {
      navigate('/')
    }
  }, [countdown, history])

  return (
    <div className="already-logged-in-container">
      <h1>Already logged in</h1>
      <p>You are already logged in.</p>
      <p>Redirecting now ...</p>
      <p>{countdown}</p>
    </div>
  )
}
