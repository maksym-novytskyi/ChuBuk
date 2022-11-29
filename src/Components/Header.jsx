import logo from '../assets/img/Logo.png'
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    return (
        <div className="header">
            <div onClick={scrollToTop} className={"logo"}>
                <img src={logo} alt="logo"/>
            </div>
            <div className="nav">
                <Link to="CompanyBlock"
                      className="nav__item"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>About company</Link>
                <Link to={"ProductionBlock"} className="nav__item"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>Products</Link>
                <Link to={"ContactsBlock"} className="nav__item"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}>Contacts</Link>
            </div>
            <div className="telephone">
                +49 171 21 26 138
            </div>
        </div>
    )
}

export default Header;