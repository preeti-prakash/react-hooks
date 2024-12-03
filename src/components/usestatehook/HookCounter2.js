import React, { useState } from "react";

function HookCounter2() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  let incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}

export default HookCounter2;

//update state based on the previous state value
//always pass in a function to the setter state method passing the previous state as an argument
