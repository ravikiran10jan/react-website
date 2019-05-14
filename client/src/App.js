

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Components/login/login';
import Signup from './Components/signUp/signup';
import Home from './Components/home/index'

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Signup}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/home' component={Home}/>
          
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;