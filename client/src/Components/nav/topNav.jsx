import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


class Header extends Component {
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


    return (
      <NavLink to={link} isActive={handleActive} activeClassName="active">
        <button className="navbarbutton button" type="button">
          {txt}
        </button>
      </NavLink>


    );
  }
}


Header.propTypes = {
  txt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Header;
