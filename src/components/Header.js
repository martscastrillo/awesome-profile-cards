import logo from "../images/woman.png";
import "../styles/layout/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <a href="./index.html" className="header__link">
        <img
          src={logo}
          alt="logo awesome profile-cards"
          className="header__link--img"
        />
      </a>
      <h1 className="header__title">Awesome profile-cards</h1>
    </header>
  );
};

export default Header;
