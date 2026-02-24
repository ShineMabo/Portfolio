import { Link } from "react-router-dom"
import "/src/App.css";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ma-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AboutMe">
                About Me
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
