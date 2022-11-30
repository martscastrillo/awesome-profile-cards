import logo from '../images/woman.png';
import '../styles/layout/_header.scss';

const Header =()=>{
    return (
        <><a href="./index.html" className="header__link">
            <img
                src={logo}
                alt="logo awesome profile-cards"
                className="header__link--img" />
        </a><h1 className="header__title">Awesome profile-cards</h1></>
    )
}

export default Header;