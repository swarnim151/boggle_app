import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Boggle from "./Component/boggle.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Boggle </h1>
        <p>
          <Boggle></Boggle>
        </p>
      </header>
    </div>
  );
}

export default App;
