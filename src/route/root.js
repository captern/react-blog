import React, {Component} from 'react'
import {Router} from 'react-router-dom'
import RouterMap from './RouterMap'

import history from '../utils/history';

export default class App extends Component{
  render(){
    return(
      <Router history={history}>
        <div>
          <RouterMap/>
        </div>
      </Router>
    )
  }
}