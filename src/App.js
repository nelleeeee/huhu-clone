import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Results from "./components/Results/Results";
import requests from "./request";

function App() {
  const [seletedOption, setSeletedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">
      <Header />
      <Nav setSeletedOption={setSeletedOption} />
      <Results seletedOption={seletedOption} />
    </div>
  );
}

export default App;
