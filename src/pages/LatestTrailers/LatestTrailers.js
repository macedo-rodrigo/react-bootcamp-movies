import useFetch from "../../Hooks/useFetch";
import TrailersPage from "../TrailersPage/TrailersPage";
import "./LatestTrailers.scss";

const BASE_URL = `${process.env.REACT_APP_API_URL_BASE}discover/movie?api_key=`;
// const API_URL_TRAILER = `${process.env.REACT_APP_API_URL_BASE}movie/1096197/videos?api_key=`;
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

const LatestTrailers = () => {
  // const [trailerData] = useFetch(API_URL_TRAILER, API_KEY);

  const [movieData] = useFetch(BASE_URL, API_KEY);

  return (
    <div className="page trailer-page">
      <h1 className="trailer-page__title">Latest trailers</h1>
      {movieData?.results?.map((movie) => {
        return (
          <div className="trailer-card" key={movie.id}>
            <TrailersPage movieId={movie.id}/>
            <h2 className="trailer-card__movie-title">{movie.title}</h2>
            <p className="trailer-card__description">Official Trailer</p>
          </div>
        );
      })}
    </div>
  );
};

export default LatestTrailers;
