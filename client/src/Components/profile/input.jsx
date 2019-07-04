import React from 'react';

const Input = ({
  label, name, type, onChange, value,
}) => (
  <div className="input-group">
    <label className="label">{label}</label>
    <input className="input--style-4 " type={type} name={name} value={value} onChange={onChange} />
  </div>
);


export default Input;
