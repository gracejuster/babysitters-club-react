import React, { Component } from 'react';
import {Link} from 'react-router'
import './App.css';
import LogInForm from './components/presentational/LogInForm'
import Routes from './routes'
import NavBar from './components/presentational/NavBar'



class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Log in page - main</h1>
      <LogInForm />
            {/* only show navbar when logged in */}
      <div>
        <h2>NAVBAR</h2>
        <NavBar params={{username: "current user"}}/>
      </div>

        {this.props.children}
      </div>
    );
  }
}

export default App;
