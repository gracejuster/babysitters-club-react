import React, { Component } from 'react';
import './App.css';
import LogInForm from './components/presentational/LogInForm'
import {Link} from 'react-router'
import Routes from './routes'


class App extends Component {
  render() {
    return (
      <div className="App">
        HomePage
        {this.props.children}
      </div>
    );
  }
}

export default App;
