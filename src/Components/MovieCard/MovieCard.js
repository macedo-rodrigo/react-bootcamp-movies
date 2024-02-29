import "./MovieCard.scss";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <p className="movie-card__name">{movie.title}</p>
    </div>
  );
};

export default MovieCard;
