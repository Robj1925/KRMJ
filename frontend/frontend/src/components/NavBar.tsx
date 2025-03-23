import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow fixed-top">
      <a className="navbar-brand" href="#">
        <span className="fw-bolder fs-4">KRMJ</span>
      </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/robs-workspace">Rob's Workspace</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/khalils-workspace">Khalil's Workspace</Link>
          </li>
        </ul>
    </nav>
  );
}

export default NavBar;
