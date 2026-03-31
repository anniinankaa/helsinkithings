import { Link } from "react-router"

function Navbar () {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )

}

export default Navbar