
import React from 'react';
import Select from 'react-select';

const SelectSkill = ({
  learnSkill, onChangeSelect, valueSelect, label, key,
}) => {
  console.log('selevt', valueSelect);
  return (
    <div className="input-group">
      <label className="label">{label}</label>
      <Select
        options={learnSkill}
        onChange={onChangeSelect}
        value={valueSelect}
        key={key}
        isMulti
      />
    </div>
  );
};


export default SelectSkill;
