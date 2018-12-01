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
      //a single input box which takes in an onChange event.
      //handleChange sets the e.target.value to the state of userInput
      //a single h3 which shows the current state of userInput
      //
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
