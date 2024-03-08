import { useState, useEffect } from "react";
import useFetch from "../../Hooks/useFetch";
import "./TrailersPage.scss";
import { FaPlay } from "react-icons/fa";

const API_KEY = `${process.env.REACT_APP_API_KEY}`;

const TrailersPage = ({ movieId }) => {
  const clip = "clip";
  const trailer = "trailer";
  const [videoUrl, setVideoUrl] = useState("");
  const API_URL_TRAILER = `${process.env.REACT_APP_API_URL_BASE}movie/${movieId}/videos?api_key=`;

  const [trailerData] = useFetch(API_URL_TRAILER, API_KEY);

  useEffect(() => {
    if (trailerData?.results?.length > 0) {
      const type = trailerData.results[0].type;
      const videoKey = trailerData.results[0].key;
      const url = type === "Clip" ? clip : trailer;
      setVideoUrl(`https://www.youtube.com/watch?v=${videoKey}=${url}`);
    }
  }, [trailerData]);
  console.log("La URL de YT es:", videoUrl);
  return (
    <div className="youtube-video">
      <a className="youtube-video__link" href={videoUrl} target="_blank" rel="noreferrer">
        <FaPlay></FaPlay>
        <p>Ver en YouTube</p>
      </a>
    </div>
  );
};

export default TrailersPage;
