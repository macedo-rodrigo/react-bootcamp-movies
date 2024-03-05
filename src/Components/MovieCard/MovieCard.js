import useFetch from "../../Hooks/useFetch";
import "./MovieCard.scss";

const API_URL_CONF = "https://api.themoviedb.org/3/configuration?api_key=";
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

const MovieCard = ({ movie }) => {
  const [movieConf] = useFetch(API_URL_CONF, API_KEY);

  return (
    <div className="movie-card">
      <img className="movie-card__img" src={`${movieConf?.images?.base_url}${movieConf?.images?.poster_sizes[2]}${movie?.poster_path}`} />
      <p className="movie-card__average">{Math.min(Math.round(movie?.vote_average * 10), 100)}%</p>
      <p className="movie-card__name">{movie?.title}</p>
      <p className="movie-card__date">{movie?.release_date}</p>

    </div>
  );
};

export default MovieCard;

// ${movieConf?.images?.base_url}${movieConf.images?.poster_sizes?.["w185"]}
