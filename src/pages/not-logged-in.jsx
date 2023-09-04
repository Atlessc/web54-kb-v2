import "../styles/not-logged-in.css";
import { Link } from "react-router-dom";

export default function NotLoggedIn() {
  return (
    <div className="not-logged-in-container">
      <h1>Nice try</h1>
      <p>you must be logged in to view this page</p>
      <Link to="/login"><div className="not-logged-in-button">Login</div></Link>
    </div>
  )
}