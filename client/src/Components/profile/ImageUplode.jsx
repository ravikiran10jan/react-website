import React, {Component} from 'react';
// import sessionCheckError from  './../../helpers/handleAuthentication';
// import {storage} from '../firebase';

class ImageUpload extends Component {



      

    // const id = sessionCheckError(sessionStorage.getItem('token')).id;
    // fetch(`api/profile?id=${id}`, {
    //   credentials: 'same-origin',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   method: 'PUT',
    //   body: JSON.stringify(formData),
    // }).then(res=>res.json())
    //   .then((res) => {
    //     if (res.err) {
    //       this.setState({msg: 'Some error happened, please try save the data again'});
    //     }
    //     this.setState({msg: 'Your profile has been updated'});
    //   })
    //   .catch((err) => {
    //     console.log('Error', 'Some error happened, please try save the data again');
    //   });

  
  render() {
    console.log("prop",this.props);
    
    const style = {
      border : '1px solid #55555',
      display:'inline-block'
    };
    return (
      <div className="input-group" style={style}>
    
        <input type="file" onChange={this.props.handleChange}/>
        <button onClick={this.props.handleUpload}>Upload</button>
      
        {/* {this.props.url && <img src={this.props.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/> 
        } */}
      </div>
    )
  }
}

export default ImageUpload;