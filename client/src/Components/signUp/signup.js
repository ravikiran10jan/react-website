import React, { Component } from 'react';
import Input from './inputSignup';
import SelectBox from './selectType';
import RadioButtons from './radioButton';



import './style.css';
/* eslint-disable*/
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      response1: '',
      error: '',
      selectedValue: 'select',
      radioOption: '',
      message:''
     
    };

 
  this.handleAddOption = this.handleAddOption.bind(this);
  this.onChange = this.onChange.bind(this);
  this.radioChange = this.radioChange.bind(this);
  }

  onChange(e) {
    this.setState({
      selectedValue: e.target.value
    })
  }

  radioChange(e) {
    this.setState({
      radioOption: e.currentTarget.value
    });
  }

 

  handleAddOption(e) {
    e.preventDefault();
    const signUpValues = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      mobile:e.target.mobile.value,
      countryCode:e.target.countryCode.value,
      city:e.target.city.value,
      password: e.target.password.value,
      ConfirmPass: e.target.ConfirmPass.value,
      selectedValue:this.state.selectedValue,
      radioOption:this.state.radioOption

    };
    
    var url = '/api/signup';

    if (signUpValues.firstName.trim()
    && signUpValues.lastName.trim()
    && signUpValues.email.trim()
    &&signUpValues.email.trim()
    && signUpValues.countryCode.trim()
    &&signUpValues.city.trim()
    && signUpValues.password.trim()
    && signUpValues.ConfirmPass.trim()) {
   fetch(url, {
   method: 'POST', 
   body: JSON.stringify(signUpValues ), 
   headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response =>{
  if(response.ok){
  this.setState(() => ({
    response1: response.ok,
  }));
  if(this.state.response1 === 'Success'){
    window.location = 'login'
  }
}else{
  this.setState(()=>({
    error: response.error.detail,
  }));
}
})
.catch(error => console.error('Error:', error));
}
else{
  this.setState(()=>({
    message:'please fill all inputs'
  }))
} 
  }
  render() {
    
    
    return (
      <div className="  main  page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
      <div className="wrapper wrapper--w680">
            <div className="card card-4">
                <div className="card-body">
                    <h2 className="title">Registration Form</h2>
 
        <form onSubmit={this.handleAddOption}>
        <div className="row row-space">
          <div className="col-2">
          <Input type="text"  name="firstName" label="First Name" />
          </div>
          <div className="col-2">
          <Input type="text"   name="lastName" label="Last Name" />
          </div>
          <div className="col-2">
          <Input type="email"  name="email" label="Email"/>
          </div>
          <div className="col-2">
          <Input type="text"   name="mobile" label="Mobile"/>
          </div>
          <div className="col-2">
          <Input type="text"   name="countryCode" label="Country Code"/>
          </div>
          <div className="col-2">
          <Input type="text"   name="city" label="City" />
          </div>
          <div className="col-2">
          <RadioButtons radio={this.radioChange} value={this.state.radioOption}/>
          </div>
          <br/>
          <label htmlFor="select1" className="label">Category</label>
          <div className="input-group">
          <SelectBox select={this.onChange} value={this.state.selectedValue}/>
          </div>
          <div className="col-2">
          <Input type="password"   name="password" label="Password"/>
          </div>
          <div className="col-2">
          <Input type="password"   name="ConfirmPass" label="Confirm password" />
          </div>
         
          </div>
          <div className="p-t-15">
            <button className="btn btn--radius-2 btn--blue">
Sign Up
            </button>
            </div>
        </form>
        {(this.state.error) && (
        <div>
          <p>
user name or email already exists..
              please try anothr
          </p>
        </div>
        )}
        {(this.state.message) && (
     <div>
       <p>{this.state.message}</p>
       
      </div>
       )}
           
            </div>
          </div>
          </div>
      

      </div>
    );
  }
}
export default Signup;