import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../screens/Home'
import Login from "../screens/Login";
import Auth from "../screens/Auth";

export class Routing extends Component {
  render () {
    return (
      <Router>
        <Route exact path='/' component={Auth} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/login' component={Login}/>
      </Router>
    )
  }
}

export default Routing
