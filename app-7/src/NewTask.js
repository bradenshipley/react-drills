import React, { Component } from 'react';
import App from './App.js'
import './App.css';

export default class NewTask extends Component {
 constructor(){
     super();
     this.state={
         input:''
     };
     this.handleAdd=this.handleAdd.bind(this);
 }
 handleInputChange(val){
     this.setState({input:val});
 }
 handleAdd(){
     this.props.add(this.state.input);
     this.setState({input:''})
 }
    render() {
    return (
      <div className="NewTask">
        <input value={this.state.input}
        placeholder="new task"
        onChange={e=>this.handleInputChange(e.target.value)} />
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}
