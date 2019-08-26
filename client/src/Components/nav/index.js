import React, {Component} from 'react';
import NavElement from './leftNav';
import Header from './topNav';
import Notifications from './Notifications';
import { NavLink } from 'react-router-dom';


import './style.css';

class Nav extends Component {
  static contextTypes = {
    router: () => true,
  }
  state = {
    show: false,
    photo:'image'
  }
  
  render() {
    const handleActive = (match) => {
      if(match && match.isExact){
        return true;
      } else {
        return false;
      }
    }

    const { show ,photo} = this.state;

    const {imageProfile,first_name,last_name}= this.props.detailes;
    
    const urlList =[
      {
        id:1,
        txt: 'Update Profile',
        link: '/',
      },
      {
        id:2,
        txt: 'Messages',
        link: '/messages',
      },
      {
        id:3,
        txt: 'Search Mentors',
        link: '/search',
      },
      {
        id:4,
        txt: 'Requests',
        link: '/requests',
      },
      {
        id:5,
        txt: 'Upload Image',
        link: '/upload',
      },
      {
        id:6,
        txt: 'Contact Us',
        link: '/contact',
      },
    ];
    const urlListTopNav =[
      {
        id:1,
        txt: 'Home',
        link: '/',
      },
      {
        id:2,
        txt: 'Contact Us',
        link: '/contact',
      },
    
     
    ]
    return (
      <div>
      <div className="sidenav">
      <h2>{first_name}  {last_name}</h2>
      <div className='navbar-logo'>
        <img  src={imageProfile} alt={`please uplode ${photo}`}/>
        </div>

        {urlList.map(item =>
          <span key={item.id}>
            <NavElement  txt={item.txt} link={item.link}>
            </NavElement>
          </span>
        )}
                <NavLink to='/logout' isActive={handleActive} activeClassName="active">
       <span> 

           <button className="sidenavbutton button" type="button" onClick={()=> {
            sessionStorage.setItem("token", "");
            window.location ='/login';
          }} name="logout" >
         Logout
        </button>
     </span>
     </NavLink>

       
      </div>
      <div className ="flex-container">
     
      <div className="navbar">
     


    

     
       {urlListTopNav.map(item =>
        <span key={item.id}>
          <Header txt={item.txt} link={item.link} netifegation={this.props}>
          </Header>
        </span>
      )}
              <NavLink to='/logout' isActive={handleActive} activeClassName="active">
       <span> 
       <div className='navbarbutton' onClick={()=> {
            sessionStorage.setItem("token", "");
            window.location ='/login';
          }} name="logout" >logout</div>
     </span>
     </NavLink>
     <span> <div className='navbarbutton notificationsStyle'> <Notifications handleNotificationResponse={this.props.handleNotificationResponse} response={this.props.response} />
      </div>

     </span>
    
    


     
     
   
      </div>
    
      </div>
    

      </div>
    );
  }
}



export default Nav;
