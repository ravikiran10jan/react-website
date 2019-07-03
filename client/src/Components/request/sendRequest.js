import React, { Component } from 'react';
import sessionCheckError from  './../../helpers/handleAuthentication';



class Request extends Component {
  constructor() {
    super();
    this.state = {
      responseSearch:[],
      msg:''
    }
  
  }


  componentDidMount(){
    // const id = sessionCheckError(sessionStorage.getItem('token')).id;
    // console.log("id in did mount",id);
    const data ={
      id:sessionCheckError(sessionStorage.getItem('token')).id,
      search:this.props.location.state.data

    }
    console.log("datasss search",data.search);
    
    const url ='/api/search';
    fetch(url, {
      method: 'POST', 
      body: JSON.stringify({ id:sessionCheckError(sessionStorage.getItem('token')).id,
      search:this.props.location.state.data}), 
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response =>{
      console.log("errr",response.err);
      if(response.err){
        console.log("inter");
        
        this.setState({msg:response.err})
      }
   
      this.setState({responseSearch:response})
      console.log('Success:')
    

   
  })
    .catch(error => console.error('Error:', error));

  }

  sendRequest =(e)=>{
    const id = sessionCheckError(sessionStorage.getItem('token')).id;
    const reciveId = e.target.id;
    var url = '/api/requests';
    var data = {sender_id: id,
      recive_id:parseInt(reciveId)};
    
    fetch(url, {
      method: 'POST', 
      body: JSON.stringify(data), 
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));

  }

  render(){
   
    
   
    const {responseSearch,msg} = this.state;
    
    return(<div className="main page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">

    <div className="wrapper wrapper--w680">
          <div className="card card-4">
              <div className="card-body">
                  <h2 className="title">Mentors</h2>
                  <div className="row row-space">
                  {responseSearch.length > 0 &&
      <div className="col-2">
        {responseSearch.map(item =>
          <span key={item.id}>
            <h1> {item.first_name} {item.last_name}</h1>
            <p>{item.about_me}</p>
            <button className="btn btn--radius-2 btn--blue" id={item.id} onClick={this.sendRequest}>add
            </button>
          </span>
        )}
      </div>
                  } 
      </div>
      <div><p>
 {msg} </p></div>
      </div>
      </div>
      </div>
      </div>
    )
  }

}
export default Request;