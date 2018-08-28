import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router'
import {connect} from 'react-redux'
import './App.css';

class App extends Component {
  login = () => {
    this.props.auth.login()
  }
  render() {
    const {isAuthenticated} = this.props.auth;
    if(isAuthenticated())
    {
      return <Redirect to='/customers' />
    }
    else
      this.login()  
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default connect()(App)
