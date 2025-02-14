import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      Counter <br />
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>{count}</div>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Counter;
