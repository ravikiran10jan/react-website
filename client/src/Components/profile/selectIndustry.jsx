
import React from 'react';
import Select from 'react-select';

const SelectIndustry = ({ Industry,onChangeSelect,valueSelect}) => {
  return (
    <div className="container">
      <div className="input-group">
        <Select
          className="input--style-4"
          options={Industry}
          onChange={onChangeSelect}
          value={valueSelect}
        />
      </div>
    </div>
  );
};

export default SelectIndustry;
