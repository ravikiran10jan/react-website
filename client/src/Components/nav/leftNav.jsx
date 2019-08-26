
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style.css';

export default class NavElement extends React.Component {
  render() {
    const handleActive = (match) => {
      if (match && match.isExact) {
        return true;
      }
      return false;
    };
    const {
      link,
      txt,

    } = this.props;
    console.log('log', link);


    return (

      <NavLink to={link} isActive={handleActive} activeClassName="active">

        <button className="sidenavbutton button" type="button">
          {txt}
        </button>
      </NavLink>


    );
  }
}

NavElement.propTypes = {
  txt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
