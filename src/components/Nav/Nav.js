import React from "react";
import "./Nav.css";
import requests from "../../request";

function Nav({ setSeletedOption }) {
  return (
    <div className="nav">
      <h2 onClick={() => setSeletedOption(requests.fetchTrending)}>Trending</h2>
      <h2 onClick={() => setSeletedOption(requests.fetchTopRated)}>TopRated</h2>
      <h2>horror</h2>
      <h2>slash</h2>
      <h2>music</h2>
      <h2>melo</h2>
    </div>
  );
}

export default Nav;
