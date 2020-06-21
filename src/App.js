import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div>
      Hello World from {props.name}
      <br/>
      Age: {props.age}
      <br/>
      Roll Number: {props.roll_num + 10}
    </div>
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <br/>
          Update by Muhammad Faizan Qureshi
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App;
