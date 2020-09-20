import React from "react";
import "./VideoCard.css";

function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img
        src="https://i.pinimg.com/474x/e4/d4/5c/e4d45c3aff36b3001c4ce86cd2368521.jpg"
        alt=""
      />
      <p>movie</p>
      <h2>title</h2>
      <p>number</p>
    </div>
  );
}

export default VideoCard;
