import React, { Component } from 'react';
import { Link } from "react-router-dom";


import SelectSearch from './selectSearch'

class Search extends Component {
  constructor() {
    super();
    this.state = {
      data:{
        
        value1:null,
     
      
      },
      learnSkill : [
        { label: "Blockchain", value: 1 },
        { label: "Machine Learning", value: 2 },
        { label: "core Java", value: 3 },
        { label: "Spring", value: 4 },
        { label: "Hibernate", value: 5 },
        { label: "Rest", value: 6 },
        { label: "React", value: 7 },
        { label: "Angular", value: 8 },
        { label: "Spell Bee", value: 9 },
        { label: "Olympiad", value: 10},
        { label: "Board Exam", value: 11 },
        { label: "SOP preparation", value: 12 },
        { label: "Assignment", value: 13 },
        { label: "Project", value: 14},
      ],
  
     
     
    
    }
  }
  onChangeSearch =(e, name  ) =>{

        this.setState({
          data: { ...this.state.data, [name]: e}
      })

    };
  
  
render(){
 
 

  
 const  {value1} = this.state.data;
 const {data} = this.state;
 const { learnSkill }= this.state;
  return(
<div className="main page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">

      <div className="wrapper wrapper--w680">
            <div className="card card-4">
                <div className="card-body">
                    <h2 className="title">Search</h2>
                    <div className="row row-space">
        <div className="col-4">
<SelectSearch label='skills learned' options={ learnSkill } valueSelect={value1} onChangeSearch={this.onChangeSearch} 
name='value1'/>
</div>
{/* <div className="col-2">
<SelectSearch label='skills mastered' options={ learnSkill } valueSelect={value2} onChangeSearch={this.onChangeSearch} name='value2'/>
</div> */}

 <div className="p-t-15">
            <Link className="btn btn--radius-2 btn--color" 
                  to={{
                    pathname: '/requests',
                    state: {
                   data
                    }
                  }}
             >
                search
                          
                            </Link>
            </div>

</div>

</div>
</div>
</div>
 </div>
)
}

}

export default Search;