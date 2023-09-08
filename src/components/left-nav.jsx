import "../styles/left-nav.css";
import LoginButton from "./login-button";
import LogoutButton from "./logout-button";
import { useAuth0 } from "@auth0/auth0-react";

export default function LeftNav() {
  const { isAuthenticated } = useAuth0();

  
  return (
    <div className="left-nav-container">
      <div className="nav-items">
        { isAuthenticated ? 
        <Link to='/'><div className="nav-item">Home</div></Link>
        <Link to='/articles'><div className="nav-item">Articles</div></Link>
        <Link to='/admin'><div className="nav-item">Admin</div></Link>
        <Link to='/profile'><div className="nav-item">Profile</div></Link>
      </div>
      :
      null
      }
      <div>
        { isAuthenticated ?
        <LogoutButton className="nav-item">Logout</LogoutButton>
        :
        <LoginButton className="nav-item">Login</LoginButton>
        }
      </div>
    </div>
  )
}
