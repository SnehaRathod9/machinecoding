import React, { useState } from "react";

function Forminput() {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    console.log("e", e);
    setName(e.target.value);
  };

  return (
    <div>
      <input onChange={(e) => handleChange(e)} value={name} />
      Name == {name}
    </div>
  );
}

export default Forminput;
