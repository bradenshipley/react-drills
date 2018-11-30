import React, { Component } from "react";
import Login from "./Login.js";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      pass: ""
    };
  }
  render() {
    return <div className="App">{<Login />}</div>;
  }
}

export default App;
