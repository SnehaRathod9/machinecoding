import React, { useState } from "react";

function Debouncing() {
  const [inputData, setInputData] = useState("");
  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  return (
    <>
      <div>Debouncing</div>
      <input type="text" onChange={handleChange} />
    </>
  );
}

export default Debouncing;
