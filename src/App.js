import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <p>This is teh app</p>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default connect()(App)
