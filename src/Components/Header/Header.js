import { NavLink } from "react-router-dom";
import "./Header.scss";
import { LanguageSelector } from "../../App";
import { useContext } from "react";
import tmdbLogo from "../../assets/tbdb-logo.png";
import { FormattedMessage } from "react-intl";

const Header = () => {
  const { setLocale } = useContext(LanguageSelector);
  return (
    <header className="header">
      <NavLink to="/" className="header__link">
        <img className="header__logo-image" src={tmdbLogo} />
      </NavLink>
      <div className="header__nav-and-lang">
        <div className="header__sections">
          <NavLink className="header__section" to="/"><FormattedMessage id="header:movies"/></NavLink>
          <NavLink className="header__section" to="/quiz">Quiz</NavLink>
        </div>
        <div className="header__lang">
          <button className="header__lang-btn" onClick={() => setLocale("es-ES")}>
            ES
          </button>
          <button className="header__lang-btn" onClick={() => setLocale("en-EN")}>
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
