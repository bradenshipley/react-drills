import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: ["test1", "test2"]
    };
  }

  render() {
    return (
      //map through the arr in state using .map(). Only rendering what is required by the project.
      //no event listener needed since this is just rendering the current state of arr as individual elements
      <ul className="arrayList">
        {this.state.arr.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    );
  }
}

export default App;
