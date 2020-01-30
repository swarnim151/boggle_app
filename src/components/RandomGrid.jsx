import React, { Component } from "react";

class RandomGrid extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    all_the_words: []
  };

  styles = {
    fontSize: 100,
    fontWeight: "bold"
  };
  render() {
    const grid = this.CreateGrid();

    return (
      <div>
        <div>
          <p></p>
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
              <textarea value={this.state.value} onChange={this.handleChange} />
              <br />
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
        grid[row][col] = chars[SIZE * row + col];
        if (grid[row][col] === "Q") grid[row][col] = "Qu";
      }
    }
    return grid;
  }
}

export default RandomGrid;
