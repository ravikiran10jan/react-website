
import React from 'react';
import Select from 'react-select';

const SelectSkill = ({learnSkill,onChangeSelect,valueSelect,label}) => {
  return (
    <div className="input-group">
      <label className="label">{label}</label>
      <Select
        options={learnSkill}
        onChange={onChangeSelect}
        value={valueSelect}
        isMulti
      />
    </div>
  );
};


export default SelectSkill;
