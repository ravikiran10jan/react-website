
import React from 'react';
import Select from 'react-select';


const SelectSearch = ({
  options, label, onChangeSearch, valueSelect, name,
}) => (

  <div className="input-group">
    <label className="label">{label}</label>
    <Select

      options={options}
      value={valueSelect}
      onChange={(e) => {
        onChangeSearch(e, name);
      }
      }

      name={name}
    />

  </div>

);


export default SelectSearch;
