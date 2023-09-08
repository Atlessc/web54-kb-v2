import { useAuth0 } from '@auth0/auth0-react';
// import left-nav.css from styles folder
import "../../styles/left-nav.css";

export default function LoginButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <div className="nav-item" onClick={() => loginWithRedirect()}>
        Sign In
      </div>
    )
  )
}