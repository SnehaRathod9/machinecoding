import React, { useEffect, useState } from "react";

function Timer() {
  const [counter, setCounter] = useState(10);
  useEffect(() => {
    setTimeout(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      } else setCounter(0);
    }, 1000);
  }, [counter]);
  return <div>{counter}</div>;
}

export default Timer;
