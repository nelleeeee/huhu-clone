import React from "react";
import "./Results.css";
import VideoCard from "./VideoCard";

function Results() {
  const movie = {};
  return (
    <div className="results">
      <VideoCard movie={movie} />
      <VideoCard movie={movie} />
      <VideoCard movie={movie} />
      <VideoCard movie={movie} />
      <VideoCard movie={movie} />
    </div>
  );
}

export default Results;
