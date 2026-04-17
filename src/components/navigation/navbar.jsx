import { Link } from "react-router"
import './navbar.css'

function Navbar () {
  return (
    <nav className="navbar">
      <img src="/navlogo.png" alt="musta kirjekuori"></img>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  )

}

export default Navbar