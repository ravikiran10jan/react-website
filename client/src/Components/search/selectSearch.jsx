
import React from 'react';
import Select from 'react-select';




const SelectSearch= ({options,label,onChangeSearch,valueSelect,name}) => {

  


  

 return (
  
      <div className="input-group">
      <label  className="label">{label}
      <Select className="input--style-4"  options={ options }  
      value={valueSelect}
      onChange={(e) => {
        
        onChangeSearch(e, name)}
      }

       name={name}
          /> 

      </label>   
    </div>

);
  }




export default SelectSearch;