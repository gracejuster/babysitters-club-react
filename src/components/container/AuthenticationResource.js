import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

function auth(ComposedComponent){

  class Authorized extends Component {
    componentWillMount(){
      if(!this.props.authenticated){
        browserHistory.push('/login')
      }
    }
    componentWillUpdate(newProps){
      if(!newProps.authenticated){
        browserHistory.push('/login')
      }
    }
    render(){ return <ComposedComponent  {...this.props}/> }
  }

  function mapStateToProps(state){
    return { authenticated: state.currentUser.authentication }
  }

  return connect(mapStateToProps)(Authorized)
  
}

export default auth
