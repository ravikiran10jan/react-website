
import React from 'react';
import Select from 'react-select';
// import 'bootstrap/dist/css/bootstrap.min.css';



const SelectSkill = ({ learnSkill,onChangeSelect,valueSelect}) => {

  

 return (
  <div className="container">
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
      <Select options={ learnSkill }  onChange={onChangeSelect}
       value={valueSelect} isMulti
          />
      </div>
      <div className="col-md-4"></div>
    </div>
  </div>
);

}

export default SelectSkill;