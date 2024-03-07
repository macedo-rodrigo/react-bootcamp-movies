import "./MovieMainInfo.scss";
import useFetch from "../../../Hooks/useFetch";

const API_URL_CONF = "https://api.themoviedb.org/3/configuration?api_key=";
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

const MovieMainInfo = ({ movieData }) => {
  const [movieConf] = useFetch(API_URL_CONF, API_KEY);
  return (
    <div className="movie-main-info">
      <div>
        <img className="movie-main-info__img" src={`${movieConf?.images?.base_url}${movieConf?.images?.poster_sizes[2]}${movieData?.poster_path}`} />
      </div>
      <h1 className="movie-main-info__title">
        {movieData?.original_title} ({movieData?.release_date.split("-")[0]})
      </h1>
      <p className="movie-main-info__subtitle">
        {movieData?.release_date} ({movieData?.spoken_languages.map((lang) => lang.name).join(", ")}) | {movieData?.genres.map((genre) => genre.name).join(", ")} | {movieData?.runtime} min
      </p>
      <p className="movie-main-info__average average">{Math.min(Math.round(movieData?.vote_average * 10), 100)}% Puntuación de los usuarios</p>
      <p className="movie-main-info__tagline">{movieData?.tagline}</p>
      <div>
        <h3 className="movie-main-info__overview-title">Overview</h3>
        <p className="movie-main-info__overview-description">{movieData?.overview}</p>
      </div>
    </div>
  );
};

export default MovieMainInfo;
