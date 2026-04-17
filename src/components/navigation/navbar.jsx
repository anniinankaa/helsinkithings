import { Link } from "react-router"

function Navbar () {
  return (
    <nav className="navbar">
      <ul style={{listStyle: "none"}} className="navbar-list">
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