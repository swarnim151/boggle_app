import React, { Component } from "react";

class Grid extends Component {
  state = {
    input_word: "vbvbnvnbvbn",
    all_the_words: [],
    grid: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    found_words: ["FSFNSF"]
  };

  PrintGrid() {
    const grid = this.state.grid;

    return (
      <div>
        <div>
          <div>
            <button>{grid[0][0]}</button>
            <button>{grid[0][1]}</button>
            <button>{grid[0][2]}</button>
            <button>{grid[0][3]}</button>
            <button>{grid[0][4]}</button>
          </div>
          <div>
            <button>{grid[1][0]}</button>
            <button>{grid[1][1]}</button>
            <button>{grid[1][2]}</button>
            <button>{grid[1][3]}</button>
            <button>{grid[1][4]}</button>
          </div>
          <div>
            <button>{grid[2][0]}</button>
            <button>{grid[2][1]}</button>
            <button>{grid[2][2]}</button>
            <button>{grid[2][3]}</button>
            <button>{grid[2][4]}</button>
          </div>
          <div>
            <button>{grid[3][0]}</button>
            <button>{grid[3][1]}</button>
            <button>{grid[3][2]}</button>
            <button>{grid[3][3]}</button>
            <button>{grid[3][4]}</button>
          </div>
          <div>
            <button>{grid[4][0]}</button>
            <button>{grid[4][1]}</button>
            <button>{grid[4][2]}</button>
            <button>{grid[4][3]}</button>
            <button>{grid[4][4]}</button>
          </div>
          <div>
            <br />
            <br />
            <form onSubmit={this.handleSubmit}>
              <label>
                Guess a word:
                <br />
                <textarea
                  input_word={this.state.value}
                  onChange={this.handleChange}
                />
                <br />
                {this.CreateGrid()}
              </label>
              <input type="submit" value="Submit" />
              <br />
              <br />
              <br />
              <br />
              <br />
            </form>
          </div>
        </div>
        ;<p></p>
      </div>
    );
  }

  CreateGrid() {
    // prettier-ignore
    const dice = ["AAAFRS", "AAEEEE", "AAFIRS", "ADENNN", "AEEEEM",
                    "AEEGMU", "AEGMNN", "AFIRSY", "BJKQXZ", "CCNSTW",
                    "CEIILT", "CEILPT", "CEIPST", "DHHNOT", "DHHLOR",
                    "DHLNOR", "DDLNOR", "EIIITT", "EMOTTT", "ENSSSU",
                    "FIPRSY", "GORRVW", "HIPRRY", "NOOTUW", "OOOTTU"];

    let chars = dice.map(cube => cube[Math.floor(Math.random() * cube.length)]);

    chars.sort(() => Math.random() - 0.5); // Shuffle the letters.

    const SIZE = 5;
    let grid = [];
    for (let row = 0; row < SIZE; row++) {
      grid[row] = [];
      for (let col = 0; col < SIZE; ++col) {
        this.state.grid[row][col] = chars[SIZE * row + col];
        if (this.state.grid[row][col] === "Q") this.state.grid[row][col] = "Qu";
      }
    }
  }

  visited_node(n, visited_nodes) {
    for (var i = 0; i < n; i++) {
      var row = [];
      for (var j = 0; j < n; j++) {
        row.push(false);
      }
      visited_nodes.push(row);
    }
  }

  check_for_letter_traversal(
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
              this.check_for_letter_traversal(
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

  boggle(grid, word) {
    var answer = [];
    var n = grid.length;
    var matched_letter = 0;
    var visited_nodes = [];
    this.visited_node(n, visited_nodes);

    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (grid[i][j] == word[0]) {
          visited_nodes[i][j] = true;
          if (word.length == 1) {
            return true;
          }
          this.check_for_letter_traversal(
            grid,
            word,
            1,
            i,
            j,
            visited_nodes,
            answer
          );
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

  check_if_new_word() {
    var result = this.boggle(this.state.grid, this.state.input_word);
    {
      result ? this.found() : this.not_found(); // "a=1" --> the function that displays the wrong word "[this.state.input)word] is incorrect! "
    }
  }

  // function for when the user inputs a correct word
  // 1. include in the fonud_wrods
  // 2. display the "Correct word! "
  // 3. display all words found
  found() {
    this.state.found_words.push(this.state.input_word);
    console.log("Word is found");
  }

  // function for when the user inputs an incorrect word
  // 1. display correct words
  // 2. Give message that it is WRONG
  // 3. clear the textbox? ( upon submit)
  not_found() {}

  display_found_words() {}

  render() {
    return (
      <div>
        <p>Boggle</p>
        <button onClick={(this.count = 1)}>Start</button>
        {this.CreateGrid()}
        {this.PrintGrid()}
        {this.state.found_words}
        {this.check_if_new_word()}
        {this.display_found_words()}
        {this.state.found_words}
      </div>
    );
  }
}

export default Grid;
