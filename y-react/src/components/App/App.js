import React, { Component } from 'react'
import './app.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import About from '../About/About'
import Faq from '../Faq/Faq'
import Home from '../Home/Home'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Link to='/'>首页</Link>
          <Link to='/about'>关于</Link>
          <Route exact path='/'component={Home} />
          <Route path='/about' component={About} />
          <Route path='/faq'component={Faq} />
        </div>
      </Router>
    )
  }
}


export default App;
