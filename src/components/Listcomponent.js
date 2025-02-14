import React from "react";

function Listcomponent() {
  const items = ["item1", "item1", "item1", "item1", "item1"];
  return (
    <div>
      Listcomponeent{" "}
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>
          
        })}
      </ul>
    </div>
  );
}

export default Listcomponent;
