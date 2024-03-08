import useFetch from "../../../Hooks/useFetch";
import "./Recommendations.scss";
import { useParams } from "react-router-dom";

const API_URL_CONF = "https://api.themoviedb.org/3/configuration?api_key=";
const BASE_URL = process.env.REACT_APP_API_URL_BASE;
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

const Recomendations = () => {
  const [movieConf] = useFetch(API_URL_CONF, API_KEY);
  const { movieId } = useParams();
  const MOVIE_RECOMMENDATIONS_URL = `${BASE_URL}movie/${movieId}/recommendations?api_key=`;
  const [movieData] = useFetch(MOVIE_RECOMMENDATIONS_URL, API_KEY);
  console.log("La url es:", MOVIE_RECOMMENDATIONS_URL);
  console.log("La data ahora es:", movieData);
  console.log("Imagenes:", movieConf);
  return (
    <div className="recommendations-page">
      <h2 className="recommendations-page__title">Recommendations</h2>
      <div className="recommendations-page__movies">
        {movieData?.results?.map((movie) => {
          return (
            <div className="recommendations-page__movie-card" key={movie.id}>
              <img className="recommendations-page__movie-img" src={`${movieConf?.images?.base_url}${movieConf?.images?.poster_sizes[2]}${movie?.poster_path}`} />
              <div className="recommendations-page__movie-info">
                <p className="recommendations-page__movie-title">{movie.original_title}</p>
                <p className="recommendations-page__movie-average">{Math.min(Math.round(movie?.vote_average * 10), 100)}%</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recomendations;
