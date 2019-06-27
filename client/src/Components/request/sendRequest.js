import React, { Component } from 'react';
import sessionCheckError from  './../../helpers/handleAuthentication';



class Request extends Component {
  constructor() {
    super();
    this.state = {
      responseSearch:[],
    }
  
  }


  componentDidMount(){
    const url ='/api/search';
    fetch(url, {
      method: 'POST', 
      body: JSON.stringify({data:this.props.location.state.data}), 
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response =>{
      this.setState({responseSearch:response})

    console.log('Success:', JSON.stringify(response))
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
   
    
   
    const {responseSearch} = this.state;
    
    return(<div className="main page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">

    <div className="wrapper wrapper--w680">
          <div className="card card-4">
              <div className="card-body">
                  <h2 className="title">Mentors</h2>
                  <div className="row row-space">
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
      </div>
      </div>
      </div>
      </div>
      </div>
    )
  }

}
export default Request;