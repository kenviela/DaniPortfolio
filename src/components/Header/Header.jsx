import { Link } from 'react-router-dom'
import "./Header.scss";
import picture from "../../assets/dani.png";
const Header = () => {
  return (
    <header className="header">
      <div className="container-picture-name">
        <img src={picture} alt="Daniela Guzman" className="picture" />
        <h1 className="username">Daniela Guzman Avila</h1>
      </div>
      <nav className="nav">
        <Link to="../About/About.jsx"> About me </Link>
        <Link to="../Projectss/Projects.jsx">Projects</Link>
        <Link to="../Contact/Contact.jsx">Contacts</Link>
      </nav>
    </header>
  );
};

export default Header;
