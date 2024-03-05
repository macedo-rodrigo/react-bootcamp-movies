import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import MoviesPage from "../MoviesPage/MoviesPage";
import "./HomePage.scss";
import Cover from "../../Components/Cover/Cover";

const HomePage = () => {
  return (
    <div className="home-page page">
      <Header />
      <Cover />
      <MoviesPage />
      <Footer />
    </div>
  );
};

export default HomePage;
