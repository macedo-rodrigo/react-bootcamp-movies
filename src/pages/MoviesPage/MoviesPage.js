import "./MoviesPage.scss";
import PopularMovies from "../PopularMovies/PopularMovies";
import TrendingMovies from "../TrendingMovies/TrendingMovies";
import LatestTrailers from "../LatestTrailers/LatestTrailers";

const MoviesPage = () => {
  return (
    <div className="movies-page">
      <TrendingMovies></TrendingMovies>
      <p>__________________</p>
      <PopularMovies></PopularMovies>
      <p>__________________</p>
      <LatestTrailers></LatestTrailers>
    </div>
  );
};

export default MoviesPage;

/* import useFetch from "../../Hooks/useFetch";
import "./MoviesPage.scss";
import Footer from "../../Components/Footer/Footer";
import MovieCard from "../../Components/MovieCard/MovieCard";
import { useState } from "react";
import "../../Styles/buttons.scss";

const API_URL = `${process.env.REACT_APP_API_URL}`;
const API_KEY = `${process.env.REACT_APP_API_KEY}`;
const NUM_ITEMS_PER_PAGE = 9;

const MoviesPage = () => {
  const [movieData] = useFetch(API_URL, API_KEY);
  const [numMoviesToShow, setNumMoviesToShow] = useState(NUM_ITEMS_PER_PAGE);
  const firstMovies = movieData?.results?.slice(0, numMoviesToShow) || [];
  const showMoreMovies = () => setNumMoviesToShow(numMoviesToShow + NUM_ITEMS_PER_PAGE);

  return (
    <div className="movies-page">
      <div className="page__content movies-page__content">
        <div className="movies-page__movie-list">
          {firstMovies.map((movie) => (
            <MovieCard key={movie.title} movie={movie}></MovieCard>
          ))}
        </div>
        <button onClick={showMoreMovies} className="page__show-more btn">
          +MORE
        </button>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MoviesPage; */
