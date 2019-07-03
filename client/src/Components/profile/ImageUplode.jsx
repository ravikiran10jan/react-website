import React from 'react';

const ImageUpload = ({label,progress,handleChangeImage,handleUploadImage}) => {
  return (
    <div className="input-group">
      <label className="label">{label}</label>
      <progress value={progress} max="100" />
      <br />
      <input className="input--style-4" type="file" onChange={handleChangeImage} />
      <button onClick={handleUploadImage}>Upload</button>
      <br />
    </div>
  );
};


export default ImageUpload;
