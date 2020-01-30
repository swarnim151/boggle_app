import React from "react";
import logo from "./logo.svg";
import RandomGrid from "./components/RandomGrid.jsx";
import Counter from "./components/counter.jsx";

import "./App.css";

function App() {
  var a = 1;
  if (a === 0) {
    return Start(a);
  }
  if (a === 1) {
    return Game;
  }
}

function Game() {
  var a = 0;
  return (
    <div className="App">
      <header className="App-header">
        <p>Boggle</p>
        <button onClick={(a = 1)}>Start</button>{" "}
      </header>
    </div>
  );
}

function Start() {
  var a = 0;
  return (
    <div className="App">
      <header className="App-header">
        <p>Boggle</p>
        <button onClick={(a = 1)}>Start</button>
      </header>
    </div>
  );
}

function visited_node(n, visited_nodes) {
  for (var i = 0; i < n; i++) {
    var row = [];
    for (var j = 0; j < n; j++) {
      row.push(false);
    }
    visited_nodes.push(row);
  }
}

function check_for_letter_traversal(
  grid,
  word,
  matched_letter,
  x,
  y,
  visited_nodes,
  answer
) {
  for (var i = x - 1; i < x + 2; i++) {
    for (var j = y - 1; j < y + 2; j++) {
      if (
        i >= 0 &&
        j >= 0 &&
        i < grid.length &&
        j < grid.length &&
        visited_nodes[i][j] == false
      ) {
        if (word[matched_letter] == grid[i][j]) {
          if (word.length - matched_letter == 1) {
            answer.push(1);
            return 1;
          } else {
            matched_letter += 1;
            visited_nodes[i][j] = true;
            check_for_letter_traversal(
              grid,
              word,
              matched_letter,
              i,
              j,
              visited_nodes,
              answer
            );
            matched_letter -= 1;
            visited_nodes[i][j] = true;
          }
        }
      }
    }
  }
}

function boggle(grid, word) {
  var answer = [];
  var n = grid.length;
  var matched_letter = 0;
  var visited_nodes = [];
  visited_node(n, visited_nodes);

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (grid[i][j] == word[0]) {
        visited_nodes[i][j] = true;
        if (word.length == 1) {
          return true;
        }
        check_for_letter_traversal(grid, word, 1, i, j, visited_nodes, answer);
        if (answer.length > 0) {
          return true;
        }
      }
    }
  }
  if (answer.length === 0) {
    return false;
  }
}

export default App;
