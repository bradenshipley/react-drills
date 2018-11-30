import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ""
    };
  }
  handleChange(val) {
    this.setState({
      userInput: val
    });
  }
  render() {
    return (
      <div>
        <input
          className="textbox"
          placeholder="Place your text here"
          onChange={e => this.handleChange(e.target.value)}
        />
        <h3>{this.state.userInput}</h3>
      </div>
    );
  }
}

export default App;
