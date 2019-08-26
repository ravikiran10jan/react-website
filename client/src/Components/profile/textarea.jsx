import React from 'react';

const Textarea = ({
  label, value, handleChange, name, placeholder,
}) => (
  <div className="input-group">
    <label className="label">{label}</label>
    <textarea className="input--style-4" style={{ width: '238px', height: '75px' }} value={value} onChange={handleChange} name={name} placeholder={placeholder} />
  </div>
);


export default Textarea;
