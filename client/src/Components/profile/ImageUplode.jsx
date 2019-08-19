import React from 'react';

const ImageUpload = ({
  label, progress, handleChangeImage, handleUploadImage,
}) => (
  <div className="input-group">
    <label className="label">{label}</label>
    <progress value={progress} max="100" />
    <br />
    <input
      className="input--style-4"
      type="file"
      onChange={handleChangeImage}
    />
    <input type="submit" className="btn-uplodeImg " onClick={handleUploadImage} value="Uplode" />
    <br />
  </div>
);


export default ImageUpload;
//  onKeyUp={handleUploadImage}
