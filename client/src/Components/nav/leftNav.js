
import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

 import './style.css';

export default class NavElement extends React.Component {

  render() {
    
    const handleActive = (match) => {
      if(match && match.isExact){
        return true;
      } else {
        return false;
      }
    }
    const {
      link,
      txt,
    
    } = this.props;

    return (
     
      <NavLink to={link} isActive={handleActive} activeClassName="active">
        <button className = 'sidenavbutton' type = "button">
         {txt}
  
        </button>


      </NavLink>
     
     
     
    );
  }
}

NavElement.propTypes = {
  // url: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
