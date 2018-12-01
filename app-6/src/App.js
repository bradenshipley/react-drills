import React, { Component } from 'react';
import ToDo from './ToDo';
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    //setting up initial state for the list and input
    this.state={
      list:[],
      input:''
    };
    //bind this to handleAddTask method
    this.handleAddTask=this.handleAddTask.bind(this)
    
  }
  //set target state of target to current value
  handleChange(val){
    this.setState({
      input:val
    })
  }
  //updating the state of list by adding in copy of all arr items then new input
  handleAddTask(){
    this.setState({
      list:[...this.state.list,this.state.input],
      input:''
    })
  }
  
  render() {
    //setting variable for mapped arr
    let list = this.state.list.map( ( element, index ) => {
      return (
        <ToDo key={ index } task={ element } />
      )
    })
    
    return (
      <div className="App">
        <h1>My To Do List:</h1>
        <input placeholder="Enter new task here"
        value={this.state.input}
        onChange={e=>this.handleChange(e.target.value)}></input>
        <button width="30px" height="10px"
        onClick={this.handleAddTask}>Add</button>
        {list}
      </div>
      
    );
  }
}

export default App;
