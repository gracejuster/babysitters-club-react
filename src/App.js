import React, { Component } from 'react';
import {Link} from 'react-router'
import './App.css';
import Routes from './routes'
import LogInForm from './components/presentational/LogInForm'
import NavBar from './components/presentational/NavBar'
import Dashboard from './components/presentational/Dashboard'





class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Login</h1>
      <LogInForm />
      {/* only show navbar when logged in */}
      <h1>NavBar</h1>
      <NavBar params={{username: "current user"}}/>
      <h1>Dashboard</h1>
      <Dashboard />
      {this.props.children}
      </div>
    );
  }
}

export default App;
// App
//   Login Form 
//     Create Account 