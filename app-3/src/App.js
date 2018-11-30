import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: ["apples", "bananas", "oranges", "pineapples", "carrots"],
      listItem: ""
    };
    //binding handleChange to (this) so it works
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {
    this.setState({
      listItem: val
    });
  }
  render() {
    //setting up our variable to hold the results of .filter().map() and rendering below
    let filtered = this.state.arr
      //checks to see if any index in our arr holds the "listItem"
      .filter((element, index) => {
        return element.includes(this.state.listItem);
      })
      //and then mapping it to our rendered H3 below the input
      .map((element, index) => {
        return <h3 key={index}>{element}</h3>;
      });
    return (
      <div className="app">
        <input
          className="searchBox"
          onChange={e => this.handleChange(e.target.value)}
        />

        <h3>{filtered}</h3>
      </div>
    );
  }
}

export default App;
