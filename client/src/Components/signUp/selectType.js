import React, { Component } from 'react';
// import { labelStyles, selectStyles } from './selectStyle.css'


class SelectBox extends Component {


  render() {
  
    return (
      <div className="rs-select2 js-select-simple select--no-search">
        <select 
        value={this.props.value}
         onChange={this.props.select }
         
         >
          <option value="select">Select an Option</option>
          <option value="Student">Student</option>
          <option value="Employe">Employe</option>
          <option value="Institation">Institution</option>
        </select>
        <div className="select-dropdown"></div>
      </div>
    )
  }
}


export default SelectBox;

