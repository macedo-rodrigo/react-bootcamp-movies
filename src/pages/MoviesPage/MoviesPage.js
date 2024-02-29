import Header from "../../Components/Header/Header";
import useFetch from "../../Hooks/useFetch";
import "./MoviesPage.scss";
import Footer from "../../Components/Footer/Footer";
import MovieCard from "../../Components/MovieCard/MovieCard";

const API_URL = `${process.env.REACT_APP_API_URL}`;
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

const MoviesPage = () => {
  const [movieData] = useFetch(API_URL, API_KEY);

  return (
    <div className="movies-page page">
      <Header></Header>

      <div className="page__content">
        <div className="movies-page__movie-list">{movieData?.results?.map((movie) => <MovieCard key={movie.title} movie={movie}></MovieCard>)}</div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MoviesPage;
