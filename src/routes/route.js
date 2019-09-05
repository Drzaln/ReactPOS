import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from '../screens/Home'
import Login from '../screens/Login'

export class Routing extends Component {
  render () {
    return (
      <>
        <Route exact path={'/'} component={Login} />
        <Route exact path={'/home'} component={Home} />
      </>
    )
  }
}

export default Routing
