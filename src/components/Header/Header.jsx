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
        <a href="#about"> About me </a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contacts</a>
      </nav>
    </header>
  );
};

export default Header;
