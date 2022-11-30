import logoAdalab from '../images/logo-adalab.png';
import '../styles/layout/_footer.scss';

const Footer =()=>{
    return (
        <>
        <p className="footer__copy">Awesome Women-cards @2022</p><img className="footer__logo" src={logoAdalab} alt="Logo Adalab" />
        </>
    )
}

export default Footer;