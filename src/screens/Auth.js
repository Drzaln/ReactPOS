import React, { Component } from 'react'

export default class Auth extends Component {
  constructor (props) {
    super(props)
    localStorage.nama_user !== undefined
      ? (window.location.href = '/home')
      : (window.location.href = '/login')
  }
  render () {
    return <div />
  }
}
