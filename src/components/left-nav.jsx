import "../styles/left-nav.css";
import useStore from "../store";
import { Link } from "react-router-dom";

export default function LeftNav() {
  const { isAuthenticated, setIsAuthenticated } = useStore();

  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  const handleLogin = () => {
    window.location.href = "/login";
  };
  return (
    <div className="left-nav-container">
      <div className="nav-items">
        <Link to='/'><div className="nav-item">Home</div></Link>
        <Link to='/articles'><div className="nav-item">Articles</div></Link>
        <Link to='/admin'><div className="nav-item">Admin</div></Link>
        <Link to='/profile/:user'><div className="nav-item">Profile</div></Link>
      </div>
      <div>
        <div className="nav-item" onClick={isAuthenticated? handleLogout : handleLogin}>{isAuthenticated ? "Logout" : "Login"}</div>
      </div>
    </div>
  )
}
