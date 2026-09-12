import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <header className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">
          <span className="logo-icon">S</span>
          <span>Student<span>Hub</span></span>
        </Link>

        <nav>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </Link>

          <Link
            to="/students"
            className={location.pathname.startsWith("/students") ? "active" : ""}
          >
            Students
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;