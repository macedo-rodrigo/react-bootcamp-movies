import "./Footer.scss";
import footerImage from "../../assets/footerImage.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <NavLink to="/">
          <img className="footer__img" src={footerImage} />
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
