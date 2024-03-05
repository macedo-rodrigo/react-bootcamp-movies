import "./App.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import QuizPage from "./pages/QuizPage/QuizPage";
import { IntlProvider } from "react-intl";
import { createContext, useEffect, useState } from "react";
import English from "./Lang/en.json";
import Spanish from "./Lang/es.json";

export const LanguageSelector = createContext();

function App() {
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState();

  useEffect(() => {
    switch (locale) {
      case "es-ES":
        setMessages(Spanish);
        break;
      default:
        setMessages(English);
    }
  }, [locale]);
  return (
    <div className="app">
      <LanguageSelector.Provider value={{ locale, setLocale }}>
        <IntlProvider messages={messages} locale={locale}>
          <HashRouter>
            <Routes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/movies" element={<MoviesPage></MoviesPage>}></Route>
              <Route path="/movies/:movieId" element={<MovieDetailPage></MovieDetailPage>}></Route>
              <Route path="/quiz" element={<QuizPage></QuizPage>}></Route>
            </Routes>
          </HashRouter>
        </IntlProvider>
      </LanguageSelector.Provider>
    </div>
  );
}

export default App;
