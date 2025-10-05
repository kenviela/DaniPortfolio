import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.scss";
import picture from "../../assets/dani.png";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="container-picture-name">
        <img src={picture} alt="Daniela Guzman" className="picture" />
        <h1 className="username">Daniela Guzman Avila</h1>

        <span
          className="material-symbols-outlined menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "close" : "menu"}
        </span>
      </div>

      <nav className={`nav ${menuOpen ? "show" : ""}`}>
        <Link to="../About/About.jsx" onClick={() => setMenuOpen(false)}>
          About me
        </Link>
        <Link to="../Projectss/Projects.jsx" onClick={() => setMenuOpen(false)}>
          Projects
        </Link>
        <Link to="../Contact/Contact.jsx" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
