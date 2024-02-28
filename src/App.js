import "./App.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import QuizPage from "./pages/QuizPage/QuizPage";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/movies" element={<MoviesPage></MoviesPage>}></Route>
          <Route path="/movies/:movieId" element={<MovieDetailPage></MovieDetailPage>}></Route>
          <Route path="/quiz" element={<QuizPage></QuizPage>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
