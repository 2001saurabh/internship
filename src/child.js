import React from "react";

function Child(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("child")}>Greet parent</button>
    </div>
  );
}

export default Child;
