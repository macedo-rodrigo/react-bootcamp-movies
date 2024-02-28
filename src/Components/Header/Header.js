import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">MOVIES</NavLink>
      <NavLink to="/quiz">QUIZ</NavLink>
    </header>
  );
};

export default Header;
