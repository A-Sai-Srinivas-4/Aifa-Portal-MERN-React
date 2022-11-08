import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
  <nav className="nav_container">
    <div className="nav-content">
      <Link to="/">
        <img
          className="website-logo"
          src="https://secureservercdn.net/160.153.137.91/nhd.f13.myftpupload.com/wp-content/uploads/2022/06/logo-1-14.svg?time=1665549221"
          alt="website logo"
        />
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Projects" className="nav-link">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/developers" className="nav-link">
            Developers
          </Link>
        </li>
      </ul>
      <button type="button" className="logout-btn">
        Sign-Out
      </button>
    </div>
  </nav>
);

export default Header;
