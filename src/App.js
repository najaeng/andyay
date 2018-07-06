import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header';
import Init from './components/Init/Init';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isTop: true
    }
  }

  scrollEvent = () => {
    //탑일경우 아닐경우 나눠야됨
    //this.setState({isTop: false});
    //$(React.findDOMNOde(this.refs.header))
  }

  render() {
    return (
      <div className="app-container">
        <Header isTop={this.state.isTop}/>
        <div className="app-content" onScroll={this.scrollEvent()}>
          <Init />
          <About />
          <Portfolio />
          <Contact />
          {/* <Route path="/" component={Init}/>
          <Route path="/about" component={About}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/contact" component={Contact}/> */}
        </div>
      </div>
    );
  }

  //header에서 메뉴눌러서 이동하는 Link사용하려면 Router안에 넣어줘야한다.
  // render() {
  //   return (
  //     <Router>
  //       <div>
  //         {this.renderApp()}
  //       </div>
  //     </Router>
  //   )
  // }
}

export default App;
