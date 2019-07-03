import React from 'react';

const Textarea = ({label,value,handleChange,name,placeholder
}) => {
  return (
    <div className="input-group">
      <label className="label">{label}</label>
      <textarea className="input--style-4" value={value} onChange={handleChange} name={name} placeholder={placeholder} />
    </div>
  );
};


export default Textarea;
