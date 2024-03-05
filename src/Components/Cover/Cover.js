import { FormattedMessage } from "react-intl";
import "./Cover.scss";
import { NavLink } from "react-router-dom";
import coverImage from "../../assets/tmdb-cover.png";

const Cover = () => {
  return (
    <div className="cover-page">
      <NavLink to="/">
        <img className="cover-page__cover" src={coverImage} />
      </NavLink>
      <div className="cover-page__para">
        <p className="cover-page__title">
          <FormattedMessage id="cover:welcome" />
        </p>
        <p className="cover-page__text">
          <FormattedMessage id="cover:para" />
        </p>
      </div>
    </div>
  );
};
export default Cover;
