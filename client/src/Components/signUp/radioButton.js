import React, { Component } from 'react';

class RadioButtons extends Component {


 
  
  render() {
    
    
    return (
      <div className="input-group">
        <label className="label">Gender</label>
        <div className="p-t-10">
        <label className="radio-container m-r-45">Female
        <input type="radio"
               value="Female"
               checked={this.props.value === "Female"}
               onChange={this.props.radio} /> 
                <span className="checkmark"></span>
         </label>
         <label className="radio-container">Male
        <input type="radio"
               value="Male"
               checked={this.props.value=== "Male"}
               onChange={this.props.radio}/>
                <span className="checkmark"></span>
        </label>
        </div>
      </div> 
    );
  }
}

export default RadioButtons;
