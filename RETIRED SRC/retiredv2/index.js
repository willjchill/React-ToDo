import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Lister} from './ToDo'

var Header = () => {
  return <div><h1>=== To-Do List ===</h1></div>;
}

class App extends Component {
  render() {
    return(
      <>
        <Header />
        <Lister />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));