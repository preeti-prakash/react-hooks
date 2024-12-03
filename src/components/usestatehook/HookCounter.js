import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Hook Count {count}
      </button>
    </div>
  );
}

export default HookCounter;

//useState Hook - its currentvalue, initial value assigned in useState() and a method that updates the state's current value
