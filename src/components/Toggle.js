import React, { useState } from "react";

function Toggle() {
  const [name, setName] = useState(true);
  return (
    <div>
      Toggle
      {/* <button onClick={() => setName(!name)}>
        {name == false ? "eha" : "Neha"}
      </button> */}
      <input type="checkbox" onChange={() => setName(!name)} />
      <p>{name ? "sneha" : "neha"}</p>
    </div>
  );
}

export default Toggle;
