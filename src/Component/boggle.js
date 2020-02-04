import React, { Component } from "react";

class Boggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_grid: false,
      grid: [
        ["T", "T", "N", "T", "D"],
        ["H", "N", "C", "P", "R"],
        ["I", "L", "A", "E", "E"],
        ["G", "L", "Z", "R", "E"],
        ["S", "R", "F", "O", "S"]
      ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  PrintGrid() {
    const grid = this.state.grid;

    return (
      <div>
        <div>
          <div>
            <button>{this.state.grid[0][0]}</button>
            <button>{this.state.grid[0][1]}</button>
            <button>{this.state.grid[0][2]}</button>
            <button>{this.state.grid[0][3]}</button>
            <button>{this.state.grid[0][4]}</button>
          </div>
          <div>
            <button>{this.state.grid[1][0]}</button>
            <button>{this.state.grid[1][1]}</button>
            <button>{this.state.grid[1][2]}</button>
            <button>{this.state.grid[1][3]}</button>
            <button>{this.state.grid[1][4]}</button>
          </div>
          <div>
            <button>{this.state.grid[2][0]}</button>
            <button>{this.state.grid[2][1]}</button>
            <button>{this.state.grid[2][2]}</button>
            <button>{this.state.grid[2][3]}</button>
            <button>{this.state.grid[2][4]}</button>
          </div>
          <div>
            <button>{this.state.grid[3][0]}</button>
            <button>{this.state.grid[3][1]}</button>
            <button>{this.state.grid[3][2]}</button>
            <button>{this.state.grid[3][3]}</button>
            <button>{this.state.grid[3][4]}</button>
          </div>
          <div>
            <button>{this.state.grid[4][0]}</button>
            <button>{this.state.grid[4][1]}</button>
            <button>{this.state.grid[4][2]}</button>
            <button>{this.state.grid[4][3]}</button>
            <button>{this.state.grid[4][4]}</button>
          </div>
        </div>
      </div>
    );
  }

  handleSubmit(event) {
    this.setState({ show_grid: true });
    event.preventDefault();
  }

  render() {
    if (this.state.show_grid) {
      return (
        <div>
          <div>{this.PrintGrid()}</div>
          <BoggleGame></BoggleGame>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.handleSubmit}>Start</button>
        </div>
      );
    }
  }
}

export default Boggle;

class BoggleGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input_word: "",
      valid_words: [],
      all_valid_words: [
        "ACE",
        "ACEROSE",
        "ACT",
        "AE",
        "AERO ",
        "AL",
        "ALGIN",
        "ALL",
        "ALLS",
        "ALS",
        "AN",
        "ANI",
        "ANIL",
        "ANILS",
        "ANT",
        "ANTHILL",
        "ANTHILLS",
        "APE",
        "APER",
        "APERS",
        "APT",
        "AR",
        "ARE",
        "ARES",
        "ARF",
        "AROSE",
        "ARS",
        "ARSE",
        "AZO",
        "CALF",
        "CALL",
        "CALLS",
        "CAN",
        "CANT",
        "CANTHI",
        "CAP",
        "CAPE",
        "CAPER",
        "CAPERER",
        "CAPERERS",
        "CAPERS",
        "CAR",
        "CARE",
        "CAREER",
        "CARER",
        "CARES",
        "CARS",
        "CARSE",
        "CEE",
        "CEES",
        "CEP",
        "CEPE",
        "CERE",
        "CERES",
        "CERO",
        "CEROS",
        "CLAN",
        "CLAP",
        "CLAPT",
        "CLARO",
        "CLAROES",
        "CLAROS",
        "CLINAL",
        "DREAR",
        "DREARS",
        "DREE",
        "DREES",
        "EAR",
        "EARS",
        "EPACT",
        "EPEE",
        "EPEES",
        "ER",
        "ERA",
        "ERE",
        "ERECT",
        "EROS",
        "EROSE",
        "ERS",
        "ES",
        "FLAN",
        "FLAP",
        "FLARE",
        "FLARES",
        "FLINT",
        "FOE",
        "FOES",
        "FOR",
        "FORA",
        "FORE",
        "FORES",
        "FRAE",
        "FRANC",
        "FRAP",
        "FREE",
        "FREER",
        "FREES",
        "FRERE",
        "FRO",
        "FROE",
        "FROES",
        "FROZE",
        "GILL",
        "GILLS",
        "GIN",
        "GLACE",
        "GLANCE",
        "GLANCER",
        "GLANCERS",
        "GLARE",
        "GLARES",
        "GLAZE",
        "GLAZER",
        "GLAZERS",
        "GLINT",
        "HI",
        "HILA",
        "HILAR",
        "HILL",
        "HILLS",
        "HIN",
        "HINT",
        "ILL",
        "ILLS",
        "IN",
        "INAPT",
        "INCEPT",
        "INLACE",
        "INN",
        "LA",
        "LAC",
        "LACE",
        "LACER",
        "LACERS",
        "LANCE",
        "LANCER",
        "LANCERS",
        "LAP",
        "LAR",
        "LAREE",
        "LAREES",
        "LARES",
        "LARS",
        "LAZE",
        "LI",
        "LILAC",
        "LIN",
        "LINAC",
        "LINN",
        "LINT",
        "NA",
        "NAE",
        "NAP",
        "NAPE",
        "NARES",
        "NIL",
        "NILL",
        "NILLS",
        "NILS",
        "NTH",
        "OE",
        "OES",
        "OF",
        "OR",
        "ORA",
        "ORAL",
        "ORALS",
        "ORE",
        "ORES",
        "ORS",
        "OS",
        "OSE",
        "PA",
        "PAC",
        "PACE",
        "PACER",
        "PACERS",
        "PACT",
        "PAL",
        "PALL",
        "PALLS",
        "PALS",
        "PAN",
        "PANT",
        "PAR",
        "PARE",
        "PAREO",
        "PAREOS",
        "PARER",
        "PARES",
        "PARS",
        "PARSE",
        "PE",
        "PEA",
        "PEAL",
        "PEALS",
        "PEAN",
        "PEAR",
        "PEARS",
        "PEC",
        "PECAN",
        "PEE",
        "PEER",
        "PEERS",
        "PEES",
        "PER",
        "PERSE",
        "PERT",
        "PREACT",
        "PREE",
        "PREES",
        "PREZ",
        "RACE",
        "RACER",
        "RAN",
        "RANCE",
        "RANI",
        "RANT",
        "RAP",
        "RAPE",
        "RAPER",
        "RAPT",
        "RAZE",
        "RAZEE",
        "RAZEES",
        "RAZER",
        "RE",
        "REACT",
        "REAL",
        "REALS",
        "REAP",
        "REAPER",
        "REAPERS",
        "REAR",
        "REARS",
        "REC",
        "RECALL",
        "RECALLS",
        "RECANT",
        "RECAP",
        "REE",
        "REES",
        "REP",
        "RERAN",
        "REROSE",
        "RES",
        "ROE",
        "ROES",
        "ROSE",
        "SEE",
        "SEEP",
        "SEER",
        "SER",
        "SERA",
        "SERAC",
        "SERAL",
        "SERAPE",
        "SERE",
        "SERER",
        "SERF",
        "SLANT",
        "SLAP",
        "SO",
        "SORA",
        "SORE",
        "SORER",
        "THILL",
        "THILLS",
        "THIN",
        "TREE",
        "TREES",
        "TREPAN",
        "ZAP",
        "ZARF",
        "ZEAL",
        "ZEALS",
        "ZEE",
        "ZEES",
        "ZERO",
        "ZEROES",
        "ZEROS"
      ],
      game_state: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  handleChange(event) {
    this.setState({ input_word: event.target.value });
  }

  handleStop(event) {
    event.preventDefault();
    this.setState({ game_state: false });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.valid_words.includes(this.state.input_word)) {
      alert("The word has already been found.");
    } else if (
      //remove the word from this.state.valid_words
      this.state.all_valid_words.includes(this.state.input_word.toUpperCase())
    ) {
      var new_valid_words = this.state.valid_words;
      new_valid_words.push(this.state.input_word);
      this.setState({ valid_words: new_valid_words });
      var new_all_valid_words = this.state.all_valid_words;
      for (var i = 0; i < new_all_valid_words.length; i++) {
        if (new_all_valid_words[i] === this.state.input_word.toUpperCase()) {
          new_all_valid_words.splice(i, 1);
        }
      }
      this.setState({ all_valid_words: new_all_valid_words });
    } else {
      alert("The word you have entered is invalid.");
    }
  }

  ValidWord() {
    const valid_words = this.state.valid_words;
    const valid_words_list = valid_words.map(print_item => (
      <li>{print_item}</li>
    ));
    return (
      <div>
        <ul> {valid_words_list} </ul>
      </div>
    );
  }

  RemainingWord() {
    var valid_words = this.state.valid_words;
    var all_words = this.state.all_valid_words;
    var remaining_words = [];

    for (var i = 0; i < all_words.length; i++) {
      var current_word = all_words[i];
      if (!valid_words.includes(current_word)) {
        remaining_words.push(current_word);
      }
    }
    const remaining_words_list = remaining_words.map(print_item => (
      <li>{print_item}</li>
    ));
    return (
      <div>
        <ul> {remaining_words_list} </ul>
      </div>
    );
  }

  render() {
    if (this.state.game_state) {
      return (
        <div>
          <div>
            <div>
              <form onSubmit={this.handleSubmit}>
                <label>
                  Enter a word:
                  <input
                    type="text"
                    value={this.state.input_word}
                    onChange={this.handleChange}
                  />
                </label>
                <input class="btn btn-primary" type="submit" value="Submit" />
              </form>
            </div>
            <div>
              <button onClick={this.handleStop}>Stop</button>
            </div>
          </div>
          <p> Valid words list: </p>
          <div>{this.ValidWord()}</div>
        </div>
      );
    } else {
      return (
        <div>
          <p> Valid words list: </p>
          <div>{this.ValidWord()}</div>
          <p> Remaining words list: </p>
          <div>{this.RemainingWord()}</div>
        </div>
      );
    }
  }
}
