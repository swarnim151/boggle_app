import React, { Component } from "react";

class inputs extends Component {
  render() {
    const x = 3;
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <span>{this.formatCount()}</span>
        <span>{}</span>
        <button>Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;

    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default inputs;
