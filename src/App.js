import React from "react";
import logo from "./logo.svg";
import RandomGrid from "./components/RandomGrid.jsx";
import Counter from "./components/counter.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Boggle</p>
        <RandomGrid></RandomGrid>
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
