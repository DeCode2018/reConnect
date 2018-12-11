import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
      super();

      this.state = {
        data: null,
      };
    }

    componentDidMount() {
      fetch('http://localhost:3000/api/v1/users')
        .then(response => response.json())
        .then(data => this.setState({ data }));
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">




        </header>
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
