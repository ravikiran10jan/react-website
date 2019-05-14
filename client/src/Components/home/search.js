
import React, { Component} from 'react';
import './search.css'
 
 
class SearchComponent  extends Component {
  constructor(){
    super()
    this.state = {
      search:'',
      searchResponse:[]
     
    };
  }
  handleSearchChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSearch = (e) => {
    e.preventDefault();
   let {search}= this.state;
    console.log("ss",search);
    var url = '/api/home';


fetch(url, {
  method: 'POST', 
  body: JSON.stringify({search}), 
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => {
  console.log('Success:', JSON.stringify(response));
  this.setState(() => (
    {
      searchResponse: Object.assign([], response)
    }
  ))  
}
)
.catch(error => console.error('Error:', error));
  }
  render(){
    console.log("gggg",this.state.searchResponse.result);
    const x= this.state.searchResponse.result;
    return (
      <div>
  <form className="search-form" onSubmit={this.handleSearch}>
          <div className="search-div">
          <input className="search-input" name="search" type="text" placeholder="search" value={this.state.searchValue} onChange={this.handleSearchChange}/>
          <button className="button-style">
search
            </button>
         
            </div>
          
  </form>
  {x && x.map((number,index)=>{
    return(<p key={number.id} >   {number.first_name} {number.last_name} </p>)
  })
}
    </div>
  )
     
  }
  
  }
export default SearchComponent ;

