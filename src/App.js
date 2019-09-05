import React, { Component } from 'react'
import Routing from './routes/route'
import { Provider } from 'react-redux'
import store from './public/redux/store'

export class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Routing />
      </Provider>
    )
  }
}

export default App
