import React, { Component } from 'react';
import ImageUplode from './ImageUplode';
import { storage } from '../../firebase/index';
import sessionCheckError from  './../../helpers/handleAuthentication';
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';
 
const SweetAlert = withSwalInstance(swal);



class UplodeImg extends Component {
  constructor() {
    super();
    this.state = {
      url:'',
      progress:'',
      image:'',
      show:false,
      msg:''

    };
  }



  handleChangeImage = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }

 
  }
  handleUploadImage = () => {
    const {image} = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed', 
    (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      this.setState({progress});
    }, 
    (error) => {
      console.log(error);
    }, 
  () => {
      storage.ref('images').child(image.name).getDownloadURL().then(url => {
        this.setState( {image:url,msg:'the image uploded please enter save'})
        //   prevState => {
        //   let formData = Object.assign({}, prevState.formData);  
        //   formData.url = url;                                     
        //   return {formData};                            
        // }
      })
  });
}
handleInsertImage = ()=>{
  console.log("urll",this.state.url);
  console.log("image",this.state.image);
  const {image} = this.state;
  const id = sessionCheckError(sessionStorage.getItem('token')).id;
  fetch(`api/upload?id=${id}`, {
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({image}),
  }).then(res=>res.json())
    .then((res) => {
      if (res.err) {
        this.setState({msg: 'Some error happened, please try save the data again'});
      }
      else{
    console.log("resss",res);
    this.setState({msg:res.mse , image:res.result.image ,show:true})

      }
    })
    .catch((err) => {
      console.log('Error', 'Some error happened, please try save the data again');
    });
  
}

  render() {
    return (
      <div className=" main page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div className="wrapper wrapper--w680">
          <div className="card card-4">
            <div className="card-body">
              <h2 className="title">Uplode Image</h2>
          

                  <ImageUplode label="image" handleChangeImage={this.handleChangeImage} handleUploadImage={this.handleUploadImage} url={this.state.url} progress={this.state.progress} handleInsertImage={this.handleInsertImage}/>
                  <p>{this.state.msg}</p>

  {this.state.show &&
      <SweetAlert
        show={this.state.show}
        title="update image"
        text={this.state.msg}
        onConfirm={() => this.setState({ show: false , msg:'' })}
      />
  }
 
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default UplodeImg;
