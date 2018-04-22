import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const pageTitle = 'N.J. Space';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-menuwrapper">
          <div className="app-title">
            {pageTitle}
            </div>
        </div>
        <div className="app-content">

        </div>
      </div>
    );
  }
}

export default App;
