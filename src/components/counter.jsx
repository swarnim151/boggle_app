import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200"
  };

  styles = {
    fontSize: 100,
    fontWeight: "bold"
  };
  render() {
    const x = 3;
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <span>{this.formatCount()}</span>
        <span>{x}</span>
        <button>Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;

    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
