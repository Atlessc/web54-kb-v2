import { useAuth0 } from '@auth0/auth0-react';

export default function LogoutButton() {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className="nav-item" onClick={() => logout()}>
        Sign out
      </div>
    )
  )
}