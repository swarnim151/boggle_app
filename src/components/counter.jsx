import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    showMe: true
  };

  styles = {
    fontSize: 100,
    fontWeight: "bold"
  };

  operation() {
    this.setState({
      showMe: false
    });
  }
  render() {
    const x = 3;
    return (
      <div>
        <h1>Hide and Show in React Js</h1>
        {this.state.showMe ? <div>Please hide me</div> : null}
        <button onClick={() => this.operation()}>Start</button>
      </div>
    );
  }
}

export default Counter;
