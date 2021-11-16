import React, { useState, useEffect } from "react";

function Effect() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMouse = (e) => {
    console.log("mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log(`updated`);
    document.title = `you clicked ${count} times`;
    window.addEventListener("mousemove", logMouse);
  }, [count]);

  // [] dependency array is used to conditionally render the useEffect based on pased props or state
  return (
    <div>
      <div>
        x: {x} y : {y}
      </div>
      <input
        type=" text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>click{count}</button>
    </div>
  );
}

export default Effect;
