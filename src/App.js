import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroArea";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="bodyContent">
        <div>checkpoints done:</div>
        <div>1. made responsive for all screens /web and mobile/ </div>
        <div>2. added animations </div>
        <div>3. implemented debouncing in search </div>
        <div>4. search dropdown implemented from scratch </div>
        <div>5. suggested buttons on click activated </div>
        <div>6. implemented a loader </div>
        <div>P.S. this section is not responsive for testing purposes lol </div>
      </div>
    </div>
  );
}

export default App;
