import useFetch from "../../Hooks/useFetch";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { useState } from "react";
import "../../Styles/buttons.scss";
import { FormattedMessage } from "react-intl";
import "./TrendingMovies.scss";

const API_URL_DAY = `${process.env.REACT_APP_API_URL_TRENDS_DAY}`;
const API_URL_WEEK = `${process.env.REACT_APP_API_URL_TRENDS_WEEK}`;
const API_KEY = `${process.env.REACT_APP_API_KEY}`;
const NUM_ITEMS_PER_PAGE = 4;

const TrendingMovies = () => {
  const [apiUrl, setApiUrl] = useState(API_URL_DAY);
  const [movieData] = useFetch(apiUrl, API_KEY);
  const [clickedSection, setClickedSection] = useState("Today");
  const [numMoviesToShow, setNumMoviesToShow] = useState(NUM_ITEMS_PER_PAGE);
  const firstMovies = movieData?.results?.slice(0, numMoviesToShow) || [];
  const showMoreMovies = () => setNumMoviesToShow(numMoviesToShow + NUM_ITEMS_PER_PAGE);

  const handleClick = () => {
    switch (clickedSection) {
      case "Today":
        setClickedSection("This week");
        setApiUrl(API_URL_WEEK);
        break;
      case "This week":
        setClickedSection("Today");
        setApiUrl(API_URL_DAY);
        break;
      default:
        setClickedSection("Today");
        break;
    }
  };
  return (
    <div className="movies-page">
      <div className="page__content movies-page__content">
        <h3 className="movies-page__title">
          <FormattedMessage id="main:trends" />
        </h3>
        <div className="movies-page__buttons">
          <button onClick={handleClick} className="btn">
            <FormattedMessage id="general:today" />
          </button>
          <button onClick={handleClick} className="btn">
            <FormattedMessage id="general:this-week" />
          </button>
        </div>
        <br></br>
        <div className="movies-page__movie-list">
          {firstMovies.map((movie) => (
            <MovieCard key={movie.title} movie={movie}></MovieCard>
          ))}
        </div>
        <button onClick={showMoreMovies} className="page__show-more btn">
          <FormattedMessage id="general:show-more" />
        </button>
      </div>
    </div>
  );
};

export default TrendingMovies;
