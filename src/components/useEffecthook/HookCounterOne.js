import React, { useState, useEffect } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - Update");
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count} times
      </button>
    </div>
  );
}

export default HookCounterOne;

//useEffect runs after every render of the component, it accepts a function as an argument which gets executed after every render
//useEffect is always mentioned inside the component by whuch we can easily access the state and the props
//conditionally run the effect function based on the dependency array that has a state varible, upon update of the variable the function in useEffect gets executed
