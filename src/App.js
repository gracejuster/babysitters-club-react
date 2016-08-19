import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    const {main, navbar, footer} = this.props
    return (
      <div className="App">
        <div className="top">
          {navbar}
        </div>
        <div className="middle">
          {main}
        </div>
        <div className="bottom">
          {footer}
        </div>
      </div>
    );
  }
}

export default App;
