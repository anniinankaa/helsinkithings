import { Link } from "react-router"
import './navbar.css'

function Navbar () {
  return (
    <nav className="navbar">
      <img src="/navlogo.png" alt="musta kirjekuori"></img>
      <div className="navbar-list">
        <div className="navbar-item">
          <Link to="/about">About</Link>
        </div>
        
        <div className="navbar-item">
          <Link to="/">Home</Link>
        </div>
      </div>
    </nav>
  )

}

export default Navbar