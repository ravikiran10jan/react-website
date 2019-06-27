import React, {Component} from 'react';


class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    }
   }
 
  render() {
  
    
    // const style = {
    //   height: '100vh',
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
    //   justifyContent: 'center'
    // };
    return (
      <div className="input-group">
         <label className="label">{this.props.label}</label>
 
      <progress value={this.props.progress} max="100"/>
      <br/>
        <input className="input--style-4" type="file" onChange={this.props.handleChangeImage}/>
        <button  onClick={this.props.handleUploadImage}>Upload</button>
        <br/>
        {/* {this.props.url && <img src={this.props.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400"/> 
        } */}
      </div>
    )
  }
}

export default ImageUpload;



      

  
//   render() {
//     console.log("prop",this.props);
    
//     const style = {
//       border : '1px solid #55555',
//       display:'inline-block'
//     };
//     return (
//       <div className="input-group" style={style}>
    
//         <input type="file" onChange={this.props.handleChange}/>
//         <button onClick={this.props.handleUpload}>Upload</button>
      
//       </div>
//     )
//   }
// }

