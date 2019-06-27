import React, { Component } from 'react';
import Input from './input';
import sessionCheckError from  './../../helpers/handleAuthentication';
import './style.css';
import SelectSkill from './selectSkill';
import ImageUplode from './ImageUplode';
import {storage} from './../../firebase/index';
import Textarea from './textarea'
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
        selectedLearnSkill: [],
        id:'',
        website:'',
        institution:'',
        url: '',
        
      },
      image: null,
    
      progress: 0,
 
     learnSkill : [
        { label: "Blockchain", value: 1 },
        { label: "Machine Learning", value: 2 },
        { label: "core Java", value: 3 },
        { label: "Spring", value: 4 },
        { label: "Hibernate", value: 5 },
        { label: "Rest", value: 6 },
        { label: "React", value: 7 },
        { label: "Angular", value: 8 },
        { label: "Spell Bee", value: 9 },
        { label: "Olympiad", value: 10},
        { label: "Board Exam", value: 11 },
        { label: "SOP preparation", value: 12 },
        { label: "Assignment", value: 13 },
        { label: "Project", value: 14},
      ],
   
     masterSkill : [
      { label: "Blockchain", value: 1 },
      { label: "Machine Learning", value: 2 },
      { label: "core Java", value: 3 },
      { label: "Spring", value: 4 },
      { label: "Hibernate", value: 5 },
      { label: "Rest", value: 6 },
      { label: "React", value: 7},
      { label: "Angular", value: 8 },
      { label: "Spell Bee", value: 9 },
      { label: "Olympiad", value: 10},
      { label: "Board Exam", value: 11 },
      { label: "SOP preparation", value: 12 },
      { label: "Assignment", value: 13 },
      { label: "Project", value: 14 },
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
      
        
        const {first_name,last_name,email,company_name,linked_profile,skypeid,about_me,achievement,skills_learn ,skills_masterd,industry,Institution_name,website,position,id
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
            institution:Institution_name,
          
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
  handleChangeImage = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleUploadImage = () => {
      const {image} = this.state;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
        console.log(error);
      }, 
    () => {
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
          this.setState(prevState => {
            let formData = Object.assign({}, prevState.formData);  
            formData.url = url;                                     
            return {formData};                            
          })
        })
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
        else{
         
        this.setState({msg: 'Your profile has been updated'});
        }
      })
      .catch((err) => {
        console.log('Error', 'Some error happened, please try save the data again');
      });
  }
  

  handleChangeLearnSkill = selectedLearnSkill => {
 
    this.setState((prevState) => {
      let formData = Object.assign({}, prevState.formData);  
       formData.selectedLearnSkill= selectedLearnSkill;                       
       return {formData};
       });
  
    }

  handleChangeMasterSkill = selectedMasterSkill => {
    this.setState((prevState) => {
    let formData = Object.assign({}, prevState.formData);  
     formData.selectedMasterSkill= selectedMasterSkill;                     
     return {formData};
     });
  };


 
  render() {

  

    
   
    
    const { Industrys,msg}= this.state;
    const {Industry,firstName,lastName,email,Company,linkedin,skype,aboutMe,achievement,website, institution}= this.state.formData;
   

    return (
      <div className=" main page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
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
        
        <label className="label"> Industry </label>
        <select className="input--style-4" name="Industry" id="Industry" value={Industry? Industry:"no-value"} onChange={this.handleChange} >
            <option disabled value="no-value">Select a Industry</option>
            {Industrys.map(Industry => {
              return <option key={Industry} value={Industry.toUpperCase()}>{Industry}</option>
            })}
          </select>
         
          </div>
          </div>
        <div className="col-2"> 
        <Textarea label='About me' value={aboutMe} handleChange={this.handleChange}
        name="aboutMe" placeholder="please write about you 500 words" />
        </div>
        <div className="col-2"> 
        <Textarea label=' achievement' value={achievement} handleChange={this.handleChange}
        name="achievement" placeholder="please write achievement 400 words" />
        </div>
        <div className="col-2">
        
       
        <SelectSkill label='skill to learn' learnSkill ={this.state.learnSkill}  onChangeSelect={this.handleChangeLearnSkill} valueSelect={this.state.formData.selectedLearnSkill} />
     
        </div>
        <div className="col-2">  
      
        <SelectSkill  label ='master to learn' learnSkill ={this.state.masterSkill }  onChangeSelect={this.handleChangeMasterSkill} valueSelect={this.state.formData.selectedMasterSkill} />
    
        </div>
        <div className="col-4">  
       < ImageUplode    label='image' handleChangeImage={this.handleChangeImage } handleUploadImage={this. handleUploadImage }  url={this.state.formData.url} progress={this.state.progress}/>
      
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