import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MovieMainInfo from "../../pages/MovieDetailPage/MovieMainInfo/MovieMainInfo";
import MainCast from "../../pages/MovieDetailPage/MainCast/MainCast";
import Recommendations from "../../pages/MovieDetailPage/Recommendations/Recommendations";
import "./MovieDetailPage.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const BASE_URL = process.env.REACT_APP_API_URL_BASE;
const API_KEY = process.env.REACT_APP_API_KEY;

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const MOVIE_URL = BASE_URL + "movie/" + movieId + "?api_key=";
  const [movieData] = useFetch(MOVIE_URL, API_KEY);

  console.log("movieData es", movieData);
  console.log("La url es", MOVIE_URL);
  return (
    <div className="movie-detail-page page">
      <Header></Header>
      <div className="movie-detail-page__content page__content">
        <MovieMainInfo movieData={movieData}></MovieMainInfo>
        <MainCast></MainCast>
        <Recommendations></Recommendations>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MovieDetailPage;
