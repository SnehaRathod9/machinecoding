import React, { useState } from "react";

function ImageUpload() {
  const [file, setFile] = useState({});

  const handleChange = (e) => {
    console.log("e.target.file", e);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <h1> ImageUpload</h1>
      <br />
      <input type="file" onChange={handleChange} />
    </div>
  );
}

export default ImageUpload;
