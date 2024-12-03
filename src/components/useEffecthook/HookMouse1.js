import React, { useState, useEffect } from "react";

function HookMouse1() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Event logged");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("effect logged");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Component Unmounting / cleanup of evenhandler");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      X-{x} Y-{y}
    </div>
  );
}

export default HookMouse1;

//useEffect will pass the second prop as an empty array so as to execute the useEffect function only once at the the initial render of the component
