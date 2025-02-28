import React, { useState } from "react";
import useCounter from "../../hooks/useCounter";

function CustomCounterOne() {
  const [count, increment, decrement, reset] = useCounter(0, 1);
  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CustomCounterOne;
