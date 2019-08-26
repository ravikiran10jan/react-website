import React, {Component} from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import handleAuthentication from './helpers/handleAuthentication';
import './App.css';
import Login from './Components/login/login';
import Signup from './Components/signUp/signup';
import Profile from './Components/profile/componyProfile'
import Search from './Components/search/search';
import Nav from './Components/nav/index';
import Request from './Components/request/sendRequest';
import UplodeImg from './Components/uplodeImg/index'


    const token = sessionStorage.getItem('token');

    
    class AppRoutes extends Component {
        state = {
          response: {
            id:'',
            imageProfile: null,
            first_name:'', 
            last_name:'',

          },
          responseAddFrined: [],
        }
      
  
       

        componentDidMount(){

console.log("h",handleAuthentication(token).status);
          const {id} = handleAuthentication(sessionStorage.getItem('token'));
  

        fetch('/api/detailes', {
          method:'POST',
          body: JSON.stringify(handleAuthentication(token)),
          headers: {'Content-Type': 'application/json'}
        })
              .then(res => res.json())
              .then(response => {                
                const {id,image,first_name, 
                  last_name,
                } = response[0]
                this.setState(
                  {
                    response:{
                      id,
                      imageProfile:image,
                      first_name, 
                      last_name,
                  }
                }
                )
              })
             
              .catch (error => console.log("error fetch notification", error))

    
                fetch(`/api/notification?id=${id}`, {
                method:'POST',
                headers: {'Content-Type': 'application/json'}
              })
                    .then(res => res.json())
                    .then(response => {
                  
                      this.setState(
                        {
                          responseAddFrined: Object.assign([], response)
                        }
                      )
  
                      
                    })
                    .catch (error => console.log("error fetch notification", error))
                  }
                  handleNotificationResponse = (deletedNotiId) => {
                    this.setState(
                      {
                        responseAddFrined: this.state.responseAddFrined.filter((noti) => noti.id !== deletedNotiId)
                      }
                    )
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
                    {/* <Route path={/[^/login]/} render={() =>
                     <Nav detailes= {this.state.response} />
                    }/> */}

                    <div>
                      <Switch>/}
                        <Route
                          path="/login"
                          render={props => (handleAuthentication(token).status ? <Redirect to="/" />
                            : <Login {...props} handleAuthentication={handleAuthentication} />)}
                        />
                        <Route path="/signup" render={props => (handleAuthentication(token).status ?
                        <Redirect to="/" />
                          : <Signup {...props} handleAuthentication={handleAuthentication} />)} />
    
                         <Route
                          path="/"
                          render={props => (handleAuthentication(token).status
                            ? <Profile {...props} token={token} userId={handleAuthentication} />
                            : <Redirect to="/login" />)

                          }
                          exact
                        />
                          <PrivateRoute path="/search" component={Search} />

                          <PrivateRoute path="/requests" component={Request} />
                        
                          <PrivateRoute path="/upload" component={UplodeImg} />
                            {/* <Route render={props => (handleAuthentication(token).status ?
                            <Nav  handleNotificationResponse={this.handleNotificationResponse} response={this.state.responseAddFrined} detailes= {this.state.response} />: null
                            )}
                   /> */}

                      </Switch>
                      </div>
                      {handleAuthentication(token).status && 
                      <Nav  handleNotificationResponse={this.handleNotificationResponse} response={this.state.responseAddFrined} detailes= {this.state.response} />
                      }
                     
                
                    </BrowserRouter>

                  </div>
    )
  }
}

export default AppRoutes;
