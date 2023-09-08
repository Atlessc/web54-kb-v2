import { useAuth0 } from '@auth0/auth0-react';

export default function LogoutButton() {
  const { logout, isAuthenticatted } = useAuth0();
  return (
    isAuthenticated && (
      <button onClick={() => logout()}>
        Sign out
      </button>
    )
  )
}