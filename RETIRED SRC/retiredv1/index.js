import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {List, Input} from './ToDo';
import './index.css';

/*

Developing a Simple To-Do List

*/

// Simple components (header and input)

const Header = () => {
  return <div><h1>To-Do List</h1></div>;
}

// main component (app)

class App extends Component {
  render() {
    return(
      <>
        <Header /> 
        <Input />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));