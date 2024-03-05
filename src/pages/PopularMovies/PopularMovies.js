import useFetch from "../../Hooks/useFetch";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { useState } from "react";
import "../../Styles/buttons.scss";
import { FormattedMessage } from "react-intl";

const API_URL_MOVIE = `${process.env.REACT_APP_API_URL_POPULAR_MOVIE}`;
const API_URL_TV = `${process.env.REACT_APP_API_URL_POPULAR_TV}`;
const API_KEY = `${process.env.REACT_APP_API_KEY}`;
const NUM_ITEMS_PER_PAGE = 4;

const PopularMovies = () => {
  const [apiUrl, setApiUrl] = useState(API_URL_MOVIE)
  const [movieData] = useFetch(apiUrl, API_KEY);
  const [clickedSection, setClickedSection] = useState("Movies");
  const [numMoviesToShow, setNumMoviesToShow] = useState(NUM_ITEMS_PER_PAGE);
  const firstMovies = movieData?.results?.slice(0, numMoviesToShow) || [];
  const showMoreMovies = () => setNumMoviesToShow(numMoviesToShow + NUM_ITEMS_PER_PAGE);

  const handleClick = () => {
    switch (clickedSection) {
      case "Movies":
        setClickedSection("TV");
        setApiUrl(API_URL_TV);
        break;
      case "TV":
        setClickedSection("Movies");
        setApiUrl(API_URL_MOVIE);
        break;
      default:
        setClickedSection("Movies");
        break;
    }
  };
  return (
    <div className="movies-page">
      <div className="page__content movies-page__content">
        <h3 className="movies-page__section-title">Lo más popular</h3>
        <div className="movies-page__buttons">
          <button onClick={handleClick} className="btn">
            Movies
          </button>
          <button onClick={handleClick} className="btn">
            TV
          </button>
        </div>
        <p>Estás en la sección: {clickedSection}</p>
        <div className="movies-page__movie-list">
          {firstMovies.map((movie) => (
            <MovieCard key={movie.title} movie={movie}></MovieCard>
          ))}
        </div>
        <button onClick={showMoreMovies} className="page__show-more btn">
          <FormattedMessage id="general:show-more"/>
        </button>
      </div>
    </div>
  );
};

export default PopularMovies;
