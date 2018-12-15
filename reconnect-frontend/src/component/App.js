import React, { Component } from 'react';
import '../App.css';
import BodyContainer from './BodyContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <ul>
        <li className="nav-item"><h1>re:CONNECT</h1></li>

      </ul>
        </header>
        <BodyContainer />
        
      </div>
    );
  }
}

export default App;

// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
