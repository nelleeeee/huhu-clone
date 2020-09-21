import React, { useEffect, useState } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import axios from "../../axios";

function Results({ seletedOption }) {
  console.log(seletedOption);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get(seletedOption)
        .catch((e) => console.log(e));

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [seletedOption]);
  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Results;
