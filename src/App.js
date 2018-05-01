import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Doodle from './components/Doodle/Doodle';
import Photo from './components/Photo/Photo';

import './App.css';

const pageTitle = 'N.J, and Yay!';

class App extends Component {
  routes = [
  {
      path: '/About',
      components: About
  },
  {
      path: '/Doodle',
      components: Doodle
  },
  {
      path: '/Photo',
      components: Photo
  }
  ];

  renderApp() {
    return (
      <div className="app-container">
        <div className="app-menuwrapper">
          <div className="app-title" onClick={() => window.location.href = '/'}>
            {pageTitle}
          </div>
          <Menu />
        </div>
        <div className="app-content">          
          <Route exact path="/about" component={About}/>
          <Route path="/photo" component={Photo}/>
          <Route path="/doodle" component={Doodle}/>
        </div>
      </div>
    );
  }

  render() {
    return (
      <Router>
        <div>
          {this.renderApp()}
        </div>
      </Router>
    )
  }
}

export default App;
