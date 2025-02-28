import React, { useContext } from "react";
import { CountContext } from "../../../App";
import ComponentR from "./ComponentJ";

function ComponentF() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <div>Component F count -{countContext.countState}</div>
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentF;
