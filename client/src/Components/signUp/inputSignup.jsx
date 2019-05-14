import React from 'react';

import './style.css';

const Input = ({
  type, placeholder, name,value ,label
}) => {


 return (
  <div className="input-group">
  <label className="label">{label}</label>
    <input className="input--style-4" type={type} placeholder={placeholder} name={name} value={value} />
  </div>
);
}


export default Input;