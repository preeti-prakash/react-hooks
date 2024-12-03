import React, { useState } from "react";
import HookMouse1 from "./HookMouse1";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <HookMouse1 />}
    </div>
  );
}

export default MouseContainer;

//When unmounting the component(HookMouse1) make sure to cancel all the subscription and eventHandlers
