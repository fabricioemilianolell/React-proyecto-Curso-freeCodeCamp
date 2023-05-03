import { Link } from "react-router-dom"


export const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav-center">
          <Link to="/">
            <p className="logo">TheCocktailDB</p>
          </Link>
        </div>
        <ul className="nav-links">
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                About
              </Link>
            </li>
        </ul>
    </nav>
  )
}
