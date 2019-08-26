import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'



class Login extends Component {
state = {
  error: undefined,
  response: [],
  email: '',
  password: '',
  tokenCheck: undefined
}


handleInputChange = (e) => {
  this.setState({ [e.target.name]: e.target.value });
}

 handelLogin = (e) => {
   e.preventDefault();
   const inputsValues = {
     email: this.state.email,
     password: this.state.password,
   };

   if (inputsValues.email.trim() && inputsValues.password.trim()) {
     this.setState({
       email: '',
       password: '',
     });

     fetch('/api/login', {
       method:'POST',
       body: JSON.stringify(inputsValues),
       headers: {
         'Content-Type': 'application/json'
       }
      
       
     }
     
   )
     .then(response => response.json())
     .then(response => {
      sessionStorage.setItem('token', response.token);
     
      
      this.setState(() => (
        {
          response: Object.assign({}, response),
          error: response.msg,
          tokenCheck: response.status
        }
      ))
      response.status && (window.location = '/')
     })
     .catch (error => console.log("error fetch", error))

   } else {
     this.setState(() => (
       { error: 'All fields are required' }
     ));
   }
 }



render(){
  
  return(
    <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
    <div className="wrapper wrapper--w680">
          <div className="card card-4 flex-container-login">
              <div className="card-body">
                  <h2 className="title">Login</h2>
    <form className="login-form" method="POST" onSubmit={this.handelLogin} >
    <div className="row row-space">
          <div className="col-2">
          <div className="input-group">
  <label className="label">Email</label>
            <input className="input--style-4" name="email" type="text"  value={this.state.email} onChange={this.handleInputChange} />
    </div>
    </div>
    <div className="col-2">
    <div className="input-group">
  <label className="label">Password</label>
            <input className="input--style-4" name="password" type="password"  value={this.state.password} onChange={this.handleInputChange} />
            </div>
    </div>
    </div>
    <div className="p-t-15">
            <button className="btn btn--radius-2 btn--color ">Sign In</button>
    </div>        
    </form>
    <div className="p-t-15">
    <Link to=  "/signup"><button className="btn btn--radius-2 btn--color">sign up</button></Link>
    </div>
    {this.state.error &&  <div className="login-error-msg">
    { <h3>{this.state.error}</h3>}
    </div>}
    </div>
    </div>
    </div>
</div>
  )
}
}

export default Login;