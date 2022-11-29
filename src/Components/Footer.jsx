import facebook from "../assets/img/Facebook_white.png";
import google from "../assets/img/Google_white.png";
import phone from "../assets/img/Phone_white.png";
import logoBlack from "../assets/img/LogoBlack.png";

const Footer = () => {
  return (
      <div className={'footer'}>
          <img src={logoBlack} alt="logo"/>
          <span>Tel.: +49 171 2126138</span>
          <span>Email: contact@chubuk.de</span>
          <span>Website: chubuk.de</span>
          <div className={'social'}>
              <img src={facebook} alt="facebook"/>
              <img src={google} alt="google"/>
              <img src={phone} alt="phone"/>
          </div>
      </div>
  )
}

export default Footer;