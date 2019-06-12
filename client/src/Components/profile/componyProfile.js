import React, { Component } from 'react';
import Input from './input';
import sessionCheckError from  './../../helpers/handleAuthentication';
import './style.css';

import SelectSkill from './selectSkill';
import SelectIndustry from './selectIndustry'

/* eslint-disable*/
class Profile extends Component {
  constructor() {
    super();
    this.state = {

      formData:{
        firstName:'',
        lastName:'',
        email:'',
        Company:'',
        linkedin:'',
        skype:'',
        aboutMe: '',
        achievement:'',
       
        selectedMasterSkill:'',
        Industry:'',
        position:'',
        selectedLearnSkill: '',
        id:'',
        website:'',
        institution:''
      },
     
     
     learnSkill : [
        { label: "Apple", value: 1 },
        { label: "Facebook", value: 2 },
        { label: "Netflix", value: 3 },
        { label: "Tesla", value: 4 },
        { label: "Amazon", value: 5 },
        { label: "Alphabet", value: 6 },
      ],
     masterSkill : [
        { label: "java", value: 1 },
        { label: "css", value: 2 },
        { label: "php", value: 3 },
        { label: "node", value: 4 },
        { label: "python", value: 5 },
        { label: "express", value: 6 },
      ],
  
      Industrys: ['A', 'B', 'C', 'D'],
      msg:''
     

     
    };


 
  }

  componentDidMount() {
    const id = sessionCheckError(sessionStorage.getItem('token')).id;
  
    
    fetch(`api/profile?id=${id}`, {
      credentials: 'same-origin',
      method: 'GET',
    }).then(res=>res.json())
      .then((res) => {
        const {first_name,last_name,email,company_name,linked_profile,skypeid,about_me,achievement,skills_learn,skills_masterd,industry,Institution_name,website,position,id
          } = res[0]

        this.setState({
          formData: {
            firstName:first_name,
            lastName:last_name,
            email:email,
            Company:company_name,
            linkedin:linked_profile,
            skype:skypeid,
            aboutMe: about_me,
            achievement:achievement,
            position:position,
            Industry:industry,
            id:id,
            website:website,
            institution:Institution_name
          }
        })
       
      })
      .catch((err)=> {
      
        console.log("error");
        
      });
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState((prevState) => {
      const formData = JSON.parse(JSON.stringify(prevState.formData));
      formData[name] = value;
      return { formData };
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { formData } = this.state;
    const id = sessionCheckError(sessionStorage.getItem('token')).id;
    fetch(`api/profile?id=${id}`, {
      credentials: 'same-origin',
      headers: {
        'content-type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(formData),
    }).then(res=>res.json())
      .then((res) => {
        if (res.err) {
          this.setState({msg: 'Some error happened, please try save the data again'});
        }
        this.setState({msg: 'Your profile has been updated'});
      })
      .catch((err) => {
        console.log('Error', 'Some error happened, please try save the data again');
      });
  }
  

  handleChangeLearnSkill = selectedLearnSkill => {
 
    this.setState((prevState) => {
      const formData = JSON.parse(JSON.stringify(prevState.formData));
            formData[selectedLearnSkill]  = selectedLearnSkill ;
            return { formData };
     });
    }

  handleChangeMasterSkill = selectedMasterSkill => {
    this.setState((prevState) => {
      const formData = JSON.parse(JSON.stringify(prevState.formData));
            formData[selectedMasterSkill] = selectedMasterSkill;
            return { formData };
     });
  };


 
  render() {
  
    const { Industrys,msg}= this.state;
    const {Industry,firstName,lastName,email,Company,linkedin,skype,aboutMe,achievement,website, institution}= this.state.formData;
   

    return (
      <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
      <div className="wrapper wrapper--w680">
            <div className="card card-4">
                <div className="card-body">
                    <h2 className="title">Update Profile</h2>
        <form onSubmit={this.handleSubmit}>
        <div className="row row-space">
        <div className="col-2">
        <Input label="Frist Name" type="text" name="firstName" value={firstName} onChange={this.handleChange} />
        </div>
        <div className="col-2">
        <Input label="Last Name" type="text" name="lastName" value={lastName}  onChange={this.handleChange}/>
        </div>
        <div className="col-2">
        <Input label="Email" type="text" name="email" value={email} onChange={this.handleChange} />
        </div>
        
        {Company === 'Employe' &&
        <div className="col-2">
         <Input label="Company" type="text" name="Company" value={Company} onChange={this.handleChange}/>
         </div> }
      
       <div className="col-2">
        <Input label="Website" type="text" name="website" value={website} onChange={this.handleChange}/>
        </div>
        <div className="col-2">
        <Input label="Institution Name" type="text" name="institution" value={institution} onChange={this.handleChange}/>
        </div>
        <div className="col-2">
        <Input label="LinkedIn Profile" type="text" name="linkedin" value={linkedin} onChange={this.handleChange}/>
        </div>
        <div className="col-2">
        <Input label="SkypID" type="text" name="skype" value={skype} onChange={this.handleChange}/>
        </div>
        <div className="col-2">
        <div className="input-group">
        <label className="label"> Industry
        <select className="input--style-4" name="Industry" id="Industry" value={Industry? Industry:"no-value"} onChange={this.handleChange} >
            <option disabled value="no-value">Select a Industry</option>
            {Industrys.map(Industry => {
              return <option key={Industry} value={Industry.toUpperCase()}>{Industry}</option>
            })}
          </select>
          </label>
          </div>
          </div>
        <div className="col-2">
        <div className="input-group">
        <label className="label">
          About me 
          <textarea className="input--style-4" value={aboutMe} onChange={this.handleChange} name="aboutMe" placeholder="please write about you 500 words"/>
        </label>
        </div>
        </div>
        <div className="col-2">
        <div className="input-group">
        <label className="label">
          achievement 
          <textarea className="input--style-4" value={achievement} onChange={this.handleChange} name="achievement" placeholder="please write achievement 400 words"/>
        </label>
        </div>
        </div>
        <div className="col-2">
        
        <label className="label">skill to learn
        <SelectSkill learnSkill ={this.state.learnSkill}  onChangeSelect={this.handleChangeLearnSkill} valueSelect={this.state.formData.selectedLearnSkill} />
        </label>
        </div>
        <div className="col-2">  
        <label className="label">master to learn
        <SelectSkill learnSkill ={this.state.masterSkill }  onChangeSelect={this.handleChangeMasterSkill} valueSelect={this.state.formData.selectedMasterSkill} />
        </label>
        </div>
        <div className="p-t-15">
        <button className="btn btn--radius-2 btn--blue">
update profile
            </button>
            </div>
</div>
</form>
<div><p>
  </p>{msg}</div>
  </div>
          </div>
          </div>
      

      </div>
    )
}
}
export default Profile;