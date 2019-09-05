import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../screens/Home'
import Login from '../screens/Login'

export class Routing extends Component {
  render () {
    return (
      <Router>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Home} />
      </Router>
    )
  }
}

export default Routing
