import React, {Component} from 'react'
import './App.css'
import Menu from './../Menu/Menu'
import routes from './../../routes'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

class App extends Component {

  showContentMenus = (routes) => {
    let result = null
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route key={index} 
                 path={route.path} 
                 exact={route.exact} 
                 component={route.main} 
          />
        )
      })
    }
    return <Switch>{ result }</Switch>
  }

  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div className="container">
            { this.showContentMenus(routes) }
          </div>
        </div>
      </Router>
    )
  }
}

export default App
