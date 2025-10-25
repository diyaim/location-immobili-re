import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.svg"; //importer le logo

export default function Header() {
    return (
    <header className="header">
      <div className="header_bloc">
        <Link to="/" className="logo">
          <img src={logo} alt="Kasa"/>
        </Link>

        <nav className="nav">
          <NavLink to="/" end className="nav_link">
            Accueil
          </NavLink>

          <NavLink to="/a-propos" className="nav_link">
            A Propos
          </NavLink>

        </nav>
      </div>
    </header>
  );
}
