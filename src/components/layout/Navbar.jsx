import { Link } from "react-router"
import './Navbar.css'
import {useState} from "react"

function Navbar () {
  const  [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <Link to="/"><img src="/navlogo.png" alt="Go to Helsinkithings homepage"></img></Link>
      <div className="navbar-list">
        <div className="navbar-item">
          <Link to="/">Home</Link>
        </div>
        <div className="navbar-item">
          <Link to="/about">About</Link>
        </div>
      </div>
      <button onClick={toggleMenu} className={`mobile-nav-button ${isOpen ? "open" : ""}`} aria-label="Menu">
        <div className="menu-button-line"></div>
        <div className="menu-button-line"></div>
      </button>
      <div className={`nav-container ${isOpen ? "open" : ""}`}>
        <div className="mobile-nav-list">
          <div onClick={toggleMenu} className="mobile-nav-item">
            <Link to="/">Home</Link>
          </div>
          <div onClick={toggleMenu} className="mobile-nav-item">
            <Link to="/about">About</Link>
          </div>
          <div onClick={toggleMenu} className="mobile-nav-item">
            <a href="https://payhip.com/helsinkithings">Our E-books</a>
          </div>
          <div onClick={toggleMenu} className="mobile-nav-item">
            <a href="mailto:helsinkithings@gmail.com">Contact us</a>
          </div>
        </div>
      </div>
    </nav>
  )

}

export default Navbar