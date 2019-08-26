import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const ImageUpload = ({
  label, progress, handleChangeImage, handleUploadImage, handleInsertImage,
}) => (
  <div className="input-group">

    {/* <label className="label">{label}</label> */}

    <progress value={progress} max="100" />
    <br />
    <br />


    <input
      className="input--style-4"
      type="file"
      onChange={handleChangeImage}
    />

    <button type="submit" className=" btn--radius-2 btn_upload" onClick={handleUploadImage}>
      <FontAwesomeIcon icon={faUpload} style={{ color: '#6c4079' }} />
upload
    </button>

    <div className="p-t-15">


      <input type="submit" className="btn btn--radius-2 btn--color" onClick={handleInsertImage} value="Save" />
    </div>
  </div>

);
// btn-uplodeImg

export default ImageUpload;
