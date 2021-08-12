import React from 'react'

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import Exercise1 from './pages/Exercise1/container/Exercise1Container'
import Exercise2 from './pages/Exercise2/container/Exercise2Container'

import './App.css'

const App = () => (
  <Router>
    <div id="mango-test-app" className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Redirect to="/exercise1" />}
        />
        <Route
          exact
          path="/exercise1"
          component={Exercise1}
        />
        <Route
          exact
          path="/exercise2"
          component={Exercise2}
        />
      </Switch>
    </div>
  </Router>
)

export default App
