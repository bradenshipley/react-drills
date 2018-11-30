import React, { Component } from "react";

import "./App.css";

class Login extends Component {
  handlePassChange(val) {
    this.setState({
      pass: val
    });
  }
  handleUsernameChange(val) {
    this.setState({
      username: val
    });
  }
  submit(){
    console.log(   `Username: ${this.state.username} Password: ${password}` );
    alert(   `Username: ${this.state.username} Password: ${password}` )
  }
  render() {
    return (
      <div className="App">
        <input
          className="username"
          placeholder="Username goes here"
          onChange={e => this.handleUsernameChange(e.target.value)}
        />
        <input
          className="pass"
          placeholder="Password goes here"
          onChange={e => this.handlePassChange(e.target.value)}
        />
        <button className='submitButton' onClick={e=>this.submit()}
      </div>
    );
  }
}

export default Login;
