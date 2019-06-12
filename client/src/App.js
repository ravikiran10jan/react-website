import React, {Component} from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import handleAuthentication from './helpers/handleAuthentication';
import './App.css';
import Login from './Components/login/login';
import Signup from './Components/signUp/signup';
import Home from './Components/home/index';
import Profile from './Components/profile/componyProfile'

    const token = sessionStorage.getItem('token');
    class AppRoutes extends Component {
        state = {
          response: [],
        }


        render(){
          const PrivateRoute = ({ component: Component }) => (
            <Route
              render={props => (
                handleAuthentication(token).status ? <Component id={handleAuthentication(token).id} {...props} />
                  : <Redirect to="/login" />
              )}
            />
          );
                return(
                  <div className="AppRoutes">

                    <BrowserRouter>
                    <div>
                      <Switch>
                        <Route
                          path="/"
                          render={props => (handleAuthentication(token).status
                            ? <Profile {...props} token={token} userId={handleAuthentication} />
                            : <Redirect to="/login" />)

                          }
                          exact
                        />
                        <Route
                          path="/login"
                          render={props => (handleAuthentication(token).status ? <Redirect to="/" />
                            : <Login {...props} handleAuthentication={handleAuthentication} />)}
                        />
                        <Route path="/signUp" render={props => (handleAuthentication(token).status ?
                        <Redirect to="/" />
                          : <Signup {...props} handleAuthentication={handleAuthentication} />)} />

                      </Switch>
                        </div>
                    </BrowserRouter>

                  </div>
    )
  }
}

export default AppRoutes;
